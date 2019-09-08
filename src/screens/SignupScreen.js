import React, {useState, useContext, useEffect } from 'react';
import { View, StyleSheet , TouchableOpacity } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer  from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SignupScreen = ({ navigation }) => { 
    const { state, signup, tryLocalSignin } = useContext(AuthContext)
      
    return( 
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                linkTitle= "Already have an account ? Sign in instead"
            />
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