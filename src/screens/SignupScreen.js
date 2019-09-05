import React, {useState, useContext } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer  from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signup } = useContext(AuthContext)
    
    return( 
        <View style={styles.container}>
            <Spacer>
            <Text h3 >
                Sign Up for Track
            </Text>
            </Spacer>
            <Input 
            autoCapitalize='none'
            autoCorrect={false}
            label="Email" 
            value={email} 
            onChangeText={(newValue) => {setEmail(newValue)}}
            /> 
            <Spacer />
            <Input 
            label="Password" 
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={password} onChangeText={(newValue) => {setPassword(newValue)}}/>
            <Spacer>
            <Button title="Sign Up" 
                onPress={() => {signup({email, password})} } 
            />
            </Spacer>
          
        </View>
    )  
}

SignupScreen.navigationOptions = () => {
    return {
        header: null,

    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,

    }
})

export default SignupScreen