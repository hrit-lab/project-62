import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.textContainer}>
      <Text style= {styles.text}> News Letter </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer :{
  backgroundColor:"blue"
  },
  text:{
    textAlign :"center",
    fontSize : 40,
    color : "white",
    fontWeight : "bold"
  }
})