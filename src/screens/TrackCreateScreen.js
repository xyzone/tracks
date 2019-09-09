import React, {useState, useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import Map from '../components/Map';
import {requestPermissionsAsync} from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)
    const startWatching = async() => {
        try{
            await requestPermissionsAsync()
        }catch(e){
            setErr(e)
        }
    }

    useEffect(
       () => {startWatching()}
    , [])
    return( 
        <SafeAreaView force-inset={{top: 'always'}}> 
        
            <Text h3>
                Track Create Screen  </Text> 
            <Map  />
            {err ? <Text>Please Enable location service</Text>: null}
        
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
  
})

export default TrackCreateScreen