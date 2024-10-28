import { extraStyles, recentsPage, textStyles } from '@/constants/Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native'

interface RecentEntriesProps {
    entries?:string
}

const RecentEntries: React.FC<RecentEntriesProps> = ({ entries }) => {
    
    const RecentBox = () => {
        return (
            <View style={[recentsPage.box,extraStyles.shadow]}>
                {entries ?
                <View><Text>entry</Text></View>
            :
            <View style={recentsPage.emptyBox}>
                <MaterialIcons name="add-circle-outline" size={30} color="#777" />
            </View>
            }
            </View>
        )
    }
    
    
    
    return (
        <View style={{}}>
            <Text style={textStyles.h2}>Recent Entries</Text>
            <View style={recentsPage.row}>
                <RecentBox />
                <RecentBox />
                <RecentBox />
                <RecentBox />
                <RecentBox />
            </View>
        </View>
    )
}

export default RecentEntries;
