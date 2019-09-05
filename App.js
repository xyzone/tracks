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
<<<<<<< HEAD
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20}/>
}
=======
import {Provider as AuthProvider} from './src/context/AuthContext';
>>>>>>> 2991a7ac150b2442ae4df20740627c715304dcf7

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    })
  })

<<<<<<< HEAD
const App = createAppContainer(switchNavigator)
=======
const App = createAppContainer(switchNavigator);
>>>>>>> 2991a7ac150b2442ae4df20740627c715304dcf7

export default () => {
  return (
  <App />
  ) 
}

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