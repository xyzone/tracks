import React, {useState, useContext, useEffect } from 'react';
import { View, StyleSheet , TouchableOpacity } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer  from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const { state, signin, tryLocalSignin } = useContext(AuthContext)
    useEffect(
        () => {
            tryLocalSignin();
        }, []
    )
    return( 
        <View style={styles.container}>
           
            <AuthForm
                headerText="Sign in for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                linkTitle= "Register new account"
            />
        </View>
    )  
}

SigninScreen.navigationOptions= {
    header: null
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

export default SigninScreen