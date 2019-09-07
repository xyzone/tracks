import React, {useState, useContext} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const TrackListScreen = ({navigation}) => {
    const {state} = useContext(AuthContext)
    return (
    <>
    <Text style={{fontSize: 12}}>
        TrackListScreen {state.token}
    </Text>
    <Button title="Go to Track Detail" 
        onPress={() => {navigation.navigate('TrackDetail')} } 
        />  
        </>
        )
}

const styles = StyleSheet.create({

})

export default TrackListScreen