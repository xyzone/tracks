import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import Spacer  from '../components/Spacer'
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    return (
        <>
            <Spacer>
            <Text h3 >
                {headerText}
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

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null}
            <Spacer>
            <Button title={submitButtonText}
                onPress={() => onSubmit({email, password})} 
            />
            </Spacer>
           
        </>

    )
}   

const styles = StyleSheet.create({

    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})

export default AuthForm