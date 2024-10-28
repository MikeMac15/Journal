import { HelloWave } from '@/components/stock/HelloWave';
import { styles, textStyles } from '@/constants/Styles';
import { Text, View, StyleSheet } from 'react-native'

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = ({ }) => {
    return (
    <>
        <View style={styles2.container}>
            <HelloWave />
            <Text style={[textStyles.h1, { marginLeft: 10, marginRight: 5 }]}>Hi</Text>
            <Text style={textStyles.h1}>Jamie, </Text>
            <Text style={textStyles.h1}>welcome back!</Text>
        </View>
        <View style={styles.seperator}/>
    </>
    )
}

export default Welcome;



const styles2 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

})