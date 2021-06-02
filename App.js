import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import HoroscopeScreen from './screens/HoroscopeScreen'
import JokeScreen from './screens/JokeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default class App extends React.Component{
 render(){
   return(
    <View>
    <AppContainer />
    </View>
   );
 }
}

var AppNavigator = createSwitchNavigator({
 HomeScreen:HomeScreen,
 HoroscopeScreen : HoroscopeScreen,
 JokeScreen : JokeScreen,
 NewsScreen : NewsScreen,
 WeatherScreen : WeatherScreen
})

const AppContainer = createAppContainer(AppNavigator)