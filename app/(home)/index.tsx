import Calendar from '@/components/UI/homePage/Calendar';
import NewEntryButton from '@/components/UI/homePage/NewEntryButton';
import RecentEntries from '@/components/UI/homePage/RecentEntries';
import Welcome from '@/components/UI/homePage/Welcome';
import { Text, View, StyleSheet } from 'react-native'

interface indexProps {

}

const Home: React.FC<indexProps> = ({ }) => {
    return (
        <View style={{margin:20}}>
            <Welcome />
            <Calendar />
            <RecentEntries />
            <NewEntryButton />
        </View>
    )
}

export default Home;
