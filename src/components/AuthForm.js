import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native'
import Spacer  from '../components/Spacer'
import { Text, Button, Input } from 'react-native-elements';

import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation'
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const {state, clearErrorMessage} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    <NavigationEvents 
        onWillBlur={() => {clearErrorMessage() }} 
    />
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