import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HoroscopeScreen extends React.Component{
  render(){
    return(
      <View>
          <AppHeader />
      <Text>Horoscope</Text>
      </View>
    )
  }
}