import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'; 
import Spacer from './Spacer'

import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, linkTitle, routeName}) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate(routeName)}}>
            <Spacer>
                <Text style={styles.link}>{linkTitle}</Text>
                </Spacer>
            </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink);