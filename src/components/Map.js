import React, {useContext} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeViewArea} from 'react-navigation';
import { Context as LocationContext} from '../context/LocationContext'

import MapView, { Polyline, Circle } from 'react-native-maps';
const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext)
    
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}} />
    }

    return( 
        <MapView 
            style={styles.map}
            initialRegion={
                {
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            }
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >    
        <Circle 
            center={currentLocation.coords}
            radius={120}
            strokeColor="rgba(125,132,124,1)"
            fillColor="rgba(125,132,225,0.3)"
        />
      
        </MapView>
        
       
    )
}
const styles = StyleSheet.create({
    map: {height:300}
})
export default Map