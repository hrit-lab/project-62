import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class NewsScreen extends React.Component{
  render(){
    return(
      <View>
          <AppHeader />
      <Text>News</Text>
      </View>
    )
  }
}