import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import { colors } from '../src/themes';

export default class HomeScreen extends Component {

  //Binding the function with class
  buttonClickListener = () => {
    alert("Clicked On Button !!!");
  };

  render() {
    return (
      //logic: jon, styling: eric
      <View style={styles.dividers}>
        <TouchableOpacity>
          <View style={styles.container} backgroundColor={colors.primary}>
            <Text style={styles.headerText}>Explore NutriHealth</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Symptom')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>What are your Symptoms?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Cook Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Shopping')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Lets go Shopping</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('FAQ')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Questions?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //eric
  container: {
    //padding:10,
    //flex: 1,
    //justifyContent: "center",
    //backgroundColor: colors.primary,
    //borderTopWidth:2,
    //borderTopColor: colors.primary,
    borderBottomWidth:2,
    borderBottomColor: colors.primary,
    height: 100,

  },
  dividers:{
    //left: 10,
    position: 'absolute',
    //bottom: 60,
    width: "100%",

  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    margin: 30,
  },
  button: {
    padding: 20,
    margin: 10,
    //width: 400,
    height: 40,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    fontSize: 20,
    //color: 'rgba(0,0,0,0.5)'  <- transparent text
    color: 'black',
    textAlign: "center",
    margin: 30,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: 'white'
  }
});
