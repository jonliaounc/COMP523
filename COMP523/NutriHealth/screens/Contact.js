import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Meredith Moyers</Text>
        <Text style={styles.paragraph}>Meredith.Moyers@unchealth.unc.edu</Text>
        <Text style={styles.paragraph}>984-974-8232</Text>
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
  paragraph: {
    textAlign: "center",
    fontSize: 18
  }
});
