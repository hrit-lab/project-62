import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
          <AppHeader />
      <Text>Joke</Text>
      </View>
    )
  }
}