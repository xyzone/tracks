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
import ResolveAuthScreen  from './src/screens/ResolveAuthScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20}/>
}

const switchNavigator = createSwitchNavigator({
   ResolveAuth: ResolveAuthScreen,
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
    <App ref={navigator => {setNavigator(navigator)}}/>
  </AuthProvider>
  )
}