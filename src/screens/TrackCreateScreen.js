import '../_mockLocation' 
import React, {  useContext } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'; 
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({isFocused}) => { 
    const {state, addLocation} = useContext(LocationContext)
    const [err] = useLocation(isFocused, (location) => {addLocation(location)})

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

export default withNavigationFocus(TrackCreateScreen)