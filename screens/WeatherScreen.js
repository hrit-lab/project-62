import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class WeatherScreen extends React.Component{
  render(){
    return(
      <View>
          <AppHeader />
      <Text style = {styles.buttonText}>Today Weather</Text>
      <Text>
      40°C in Delhi
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    color:"white",
  },
}
)