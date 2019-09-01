import React from 'react';
import { View, StyleSheet  } from 'react-native';
import { Button, Text, Input } from 'react-native-elements'
const SignupScreen = ({ navigation }) => {
    return( 
        <View>
       <Text style={{fontSize: 48}}>
           SignupScreen
        </Text>
        <Button title="Go to sigin" 
        onPress={() => {navigation.navigate('Signin')} } 
        />
         <Button title="Go to mainflow" 
        onPress={() => {navigation.navigate('mainFlow')} } 
        />
        </View>
    )  
}

const styles = StyleSheet.create({

})

export default SignupScreen