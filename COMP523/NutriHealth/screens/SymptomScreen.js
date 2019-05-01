import React from 'react';
import { ScrollView, StyleSheet, Button, View, Text, TouchableWithoutFeedback  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from '../src/themes';

export default class SymptomScreen extends React.Component {
  static navigationOptions = {
    title: 'Symptoms',
    headerTitleStyle:{
      color: 'black',
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      alignItems: 'center'
    }
  };

  render() {
    //logic: jon, styling: eric
      const { navigate } = this.props.navigation
      return (
        <ScrollView style={styles.dividers}>
        <TouchableWithoutFeedback>
          <View style={styles.container} backgroundColor={"lightgreen"}>
            <Text style={styles.headerText2}>What are your symptoms?</Text>
          </View>
        </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'constipation'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Constipation</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'diarrhea'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Diarrhea</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'poor_appetite'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Poor Appetite</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'nausea'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Nausea</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'sore_mouth'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Sore Mouth</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'difficulty_swallowing'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Difficulty Swallowing</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List', {SymptomType: 'taste_changes'})}>
            <View style={styles.container}>
              <Text style={styles.symptomText}>Taste Changes</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
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
    //position: 'absolute',
    //bottom: 160,
    width: "100%",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    alignItems: "center",
  },
  headerText2: {
    fontSize: 25,
    textAlign: "center",
    margin: 30,
    fontWeight: "bold"
  },
  symptomText: {
    fontSize: 20,
    //color: 'rgba(0,0,0,0.5)'  <- transparent text
    color: 'black',
    textAlign: "center",
    margin: 30,
  }
});
