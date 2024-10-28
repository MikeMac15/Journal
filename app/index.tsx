import React from "react";
import { Button, View, StyleSheet, SafeAreaView } from "react-native";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import outputs from "../amplify_outputs.json";
import SettingsIndex from "./(settings)";
import { gradient, styles } from "@/constants/Styles";
import Home from "./(home)";


Amplify.configure(outputs);



const App = () => {
  const SignOutButton = () => {
    const { signOut } = useAuthenticator();
  
    return (
      <View style={styles.signOutButton}>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    );
  };


  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView style={styles.container}>
          
        <SignOutButton />
        <Home />
         
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
};


export default App;