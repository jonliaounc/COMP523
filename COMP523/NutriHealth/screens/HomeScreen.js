import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {

  //Binding the function with class
  buttonClickListener = () => {
    alert("Clicked On Button !!!");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to NutriHealth!</Text>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "green" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Symptom')}
            title="Look for Recipes"
            color="#00B0FF"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Favorites')}
            title="Cook Your Favorites"
            color="#EC407A"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Shopping')}
            title="Lets go Shopping"
            color="#1DE9B6"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('FAQ')}
            title="Questions"
            color="#FF3D00"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Contact')}
            title="Contact Us"
            color="brown"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  button: {
    padding: 20,
    fontSize: 15,
    fontFamily: "arial",
    width: 400,
    height: 40,
    textAlign: "center"
  }
});
