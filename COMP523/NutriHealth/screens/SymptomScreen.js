import React from 'react';
import { ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SymptomScreen extends React.Component {
  static navigationOptions = {
    title: 'Symptoms',
  };

  render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>What is Your Symptom?</Text>

          <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={() => this.props.navigation.navigate('Recipes', {SymptomType: 'constipation'})}
              title="Constipation"
              color="#00B0FF"
            />
          </View>

          <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={() => this.props.navigation.navigate('Recipes', {SymptomType: 'diarrhea'})}
              title="Diarrhea"
              color="#EC407A"
            />
          </View>

          <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={() => this.props.navigation.navigate('Recipes', {SymptomType: 'mouthsores'})}
              title="Mouth Sores"
              color="#1DE9B6"
            />
          </View>

          <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
            <Button
              onPress={() => this.props.navigation.navigate('Recipes', {SymptomType: 'nausea'})}
              title="Nausea"
              color="#FF3D00"
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
});
