import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import {
//   createBottomTabNavigator,
//   createTabNavigator
// } from 'react-navigation-tabs'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Navigation'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <App />
  )
}