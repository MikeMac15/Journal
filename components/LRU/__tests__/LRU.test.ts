import LRU from '../LRU';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe('LRU Cache', () => {
    let cache: LRU<string, number>;

    beforeEach(() => {
        cache = new LRU<string, number>(3);
    });

    test('should update and get values correctly', () => {
        cache.update('a', 1);
        cache.update('b', 2);
        cache.update('c', 3);

        expect(cache.get('a')).toBe(1);
        expect(cache.get('b')).toBe(2);
        expect(cache.get('c')).toBe(3);
    });

    test('should move recently accessed items to the front', () => {
        cache.update('a', 1);
        cache.update('b', 2);
        cache.update('c', 3);

        cache.get('a');
        cache.update('d', 4);

        expect(cache.get('a')).toBe(1);
        expect(cache.get('b')).toBeUndefined();
        expect(cache.get('c')).toBe(3);
        expect(cache.get('d')).toBe(4);
    });

    test('should evict the least recently used item when capacity is exceeded', () => {
        cache.update('a', 1);
        cache.update('b', 2);
        cache.update('c', 3);
        cache.update('d', 4);

        expect(cache.get('a')).toBeUndefined();
        expect(cache.get('b')).toBe(2);
        expect(cache.get('c')).toBe(3);
        expect(cache.get('d')).toBe(4);
    });

    test('should initialize from storage correctly', async () => {
        const mockGetItem = jest.spyOn(AsyncStorage, 'getItem').mockResolvedValue(JSON.stringify([['a', 1], ['b', 2], ['c', 3]]));
        await cache.InitializeFromStorage();

        expect(cache.get('a')).toBe(1);
        expect(cache.get('b')).toBe(2);
        expect(cache.get('c')).toBe(3);

        mockGetItem.mockRestore();
    });

    test('should save cache to storage correctly', async () => {
        const mockSetItem = jest.spyOn(AsyncStorage, 'setItem').mockResolvedValue();
        cache.update('a', 1);
        cache.update('b', 2);
        cache.update('c', 3);

        await cache.SaveCacheToStorage();

        expect(mockSetItem).toHaveBeenCalledWith('journalCache', JSON.stringify([['a', 1], ['b', 2], ['c', 3]]));

        mockSetItem.mockRestore();
    });
});