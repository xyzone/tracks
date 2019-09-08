import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import MapView from 'react-native-maps';

const TrackCreateScreen = () => {
    return( 
        <SafeAreaView force-inset={{top: 'always'}}> 
        
            <Text h3>
                Track Create Screen  </Text> 
            <MapView style={styles.map} />
        
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    map: {
        height: 300, 
    }
})

export default TrackCreateScreen