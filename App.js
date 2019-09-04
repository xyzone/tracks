import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator  
} from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    })
  })

const App = createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
  <AuthProvider>
    <App />
  </AuthProvider>
  )
}