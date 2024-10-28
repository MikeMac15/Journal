import { styles } from '@/constants/Styles';
// import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { Text, View, StyleSheet, Button } from 'react-native'

interface indexProps {

}

const SettingsIndex: React.FC<indexProps> = ({ }) => {

    const SignOutButton = () => {
        // const { signOut } = useAuthenticator();
      
        return (
          <View style={styles.signOutButton}>
            {/* <Button title="Sign Out" onPress={signOut} /> */}
          </View>
        );
      };


    return (
        <View style={styles.container}>
            <SignOutButton />
        </View>
    )
}

export default SettingsIndex;


