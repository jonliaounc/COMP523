import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { colors } from '../src/themes';
export default class RecipesScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      SymptomLink: this.props.navigation.state.params.SymptomLink,
      RecipeIndex: this.props.navigation.state.params.RecipeIndex,
    }
    link = "https://fathomless-springs-92490.herokuapp.com/" + this.state.SymptomLink;
  }

  componentDidMount(){
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          name: responseJson[this.state.RecipeIndex].name,
          description: responseJson[this.state.RecipeIndex].description,
          ingredients: responseJson[this.state.RecipeIndex].ingredients,
          directions: responseJson[this.state.RecipeIndex].directions,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ScrollView style={styles.dividers}>
        <View style={styles.borderBottom}>
          <Text style={styles.headerText}> {this.state.name} {'\n'}{'\n'}</Text>
        </View>
        <View>
          <Text style={styles.paragraphCenter}> Description: {this.state.description} {'\n'}{'\n'}</Text>
        </View>
        <View>
          <Text style={styles.identityText}> Ingredients:{'\n'}</Text>
          {
            this.state.ingredients.map((param, i) => {
              return (
                <Text style={styles.paragraphLeft}> {param} </Text>
              )
            })
          }
        </View>
        <View>
          <Text style={styles.identityText}>{'\n'}{'\n'}Directions:{'\n'}</Text>
          {
            this.state.directions.map((param, i) => {
              return (
                <Text style={styles.paragraphLeft}> {param} {'\n'}</Text>
              )
            })
          }
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
    // borderBottomWidth:2,
    // borderBottomColor: colors.primary,
    // height: 100,
  },
  borderBottom:{
    borderBottomWidth:2,
    borderBottomColor: colors.primary,
    height: 80,
    padding: 0,
    margin: 0,

  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    margin: 23,
    fontWeight: "bold"
  },
  dividers:{
  //left: 10,
  //position: 'absolute',
  //bottom: 160,
    width: "100%",
    flex:1,
  },
  paragraphCenter: {
    textAlign: "center",
    margin: 20,
    fontSize: 18,
  },
  paragraphLeft: {
    textAlign: "left",
    fontSize: 22,
  },
  identityText:{
    fontSize: 23,
  },
  paragraphText:{

  },
});
