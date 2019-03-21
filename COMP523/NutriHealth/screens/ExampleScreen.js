import React from 'react';
import { Image, Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ExampleScreen extends React.Component {

  static navigationOptions = {
    title: 'Food Options',
  };

  render() {
    return (
      <View style={styles.container}>
          <Text> This is an example recipe </Text>
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
  }
});
