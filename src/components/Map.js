import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeViewArea} from 'react-navigation';

import MapView from 'react-native-maps';
const Map = () => {
    return( 
        <MapView style={styles.map}/>    
       
    )
}
const styles = StyleSheet.create({
    map: {height:300}
})
export default Map