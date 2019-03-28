import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';

var link;

export default class RecipesScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      SymptomType: this.props.navigation.state.params.SymptomType
    }
    link = "https://fathomless-springs-92490.herokuapp.com/" + this.state.SymptomType;
  }

  componentDidMount(){
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          name: responseJson[0].name,
          description: responseJson[0].description,
          ingredients: responseJson[0].ingredients,
          directions: responseJson[0].directions,
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
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.state.SymptomType}</Text>
          <Text style={styles.paragraph}> This is the name: {this.state.name} {'\n'}{'\n'}</Text>
          <Text style={styles.paragraph}> This is the description: {this.state.description} {'\n'}{'\n'}</Text>
          <Text style={styles.paragraph}> These are the ingredients:{'\n'}</Text>
          {
            this.state.ingredients.map((param, i) => {
              return (
                <Text style={styles.paragraph}> {param} </Text>
              )
            })
          }
          <Text style={styles.paragraph}>{'\n'}{'\n'}These are the directions:{'\n'}</Text>
          {
            this.state.directions.map((param, i) => {
              return (
                <Text style={styles.paragraph}> {param} </Text>
              )
            })
          }
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
    textAlign: "center"
  }
});
