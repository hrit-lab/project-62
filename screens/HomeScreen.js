import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

export default class HomeScreen extends React.Component{
    constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    };
  }
  likeCount=()=>{
    this.setState({
      like: this.state.like + 1
    })
  }
    dislikeCount=()=>{
    this.setState({
      dislike: this.state.dislike + 1
    })
  }
  goToHoroscopeScreen=()=>{
    this.props.navigation.navigate('HoroscopeScreen');
  }
    goToJokeScreen=()=>{
    this.props.navigation.navigate('JokeScreen');
  }
    goToNewsScreen=()=>{
    this.props.navigation.navigate('NewsScreen');
  }
    goToWeatherScreen=()=>{
    this.props.navigation.navigate('WeatherScreen');
  }
  likePressed(){
    var like = db.ref('ratings/'+ '/')
    like.update({
      likePressed:1
    });
  }

  dislikePressed(){
    var dislike = db.ref('ratings/'+ '/') 
    dislike.update({
      dislikePressed:1
    });
  }

  render(){
    return(
      <View>
      <AppHeader />
     <TouchableOpacity style = {[styles.button, {backgroundColor:"green"}]}
     onPress = {()=> {
               this.likePressed(),
     this.dislikePressed(),
      this.goToJokeScreen()}}>
     <Text style = {styles.buttonText}>Read A Joke</Text>
     </TouchableOpacity>
          <TouchableOpacity style = {[styles.button, {backgroundColor:"yellow"}]}
          onPress ={()=> {
                      this.likePressed(),
     this.dislikePressed(),
          this.goToHoroscopeScreen()}}>
     <Text style = {styles.buttonText}>Horoscope</Text>
     </TouchableOpacity>
          <TouchableOpacity style = {[styles.button, {backgroundColor:"red"}]}
          onPress = {()=>{
          this.likePressed(),
     this.dislikePressed(),
      this.goToWeatherScreen()}}>
     <Text style = {styles.buttonText}>Weather</Text>
     </TouchableOpacity>
          <TouchableOpacity style = {[styles.button, {backgroundColor:"blue"}]}
          onPress = {()=>{
                      this.likePressed(),
     this.dislikePressed(),
          this.goToNewsScreen()}}>
     <Text style = {styles.buttonText}>Top News</Text>
     </TouchableOpacity>
     <Text style ={styles.text}>Rate Us </Text>
     <Text style = {styles.like}>{this.state.like}</Text>
          <TouchableOpacity  onPress = {this.likeCount}>
     <Image style={styles.image2}
     source={require('../assets/thumbsup.png')} />
     </TouchableOpacity>
     <TouchableOpacity onPress ={this.dislikeCount}>
               <Text style = {styles.dislike}>{this.state.dislike}</Text>
          <Image style={styles.image1}
     source={require('../assets/thumbsdown.png')} />
     </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop : 50,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    color:"white",
  },
  text:{
    marginTop : 30,
    color:'black',
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20
  },
  image1:{
    width:50, 
    height:50,
    marginLeft: 180,
    marginTop: 10
  },
    image2:{
    width:50, 
    height:50,
    marginLeft: 100,
    marginTop: 15
  },
  like:{
    color:"black",
    fontWeight:"bold",
    marginLeft : 120,
    marginTop:10
  },
  dislike:{
        color:"black",
    fontWeight:"bold",
    marginLeft : 210,
    marginTop:-80
  }
});