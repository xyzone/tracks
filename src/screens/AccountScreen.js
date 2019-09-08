import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {state, signout} = useContext(AuthContext)
    return(
    <SafeAreaView forceInset={{top: 'always'}} >
         <View > 
        <Text style={{fontSize: 48}}>
            Account Screen


        </Text>
        <Button title="Sign out" onPress={() => {signout()}} />
        </View>

    </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({

})

export default AccountScreen