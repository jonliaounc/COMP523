import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Button, ScrollView } from 'react-native';

var nameArr = [];

export default class ListScreen extends React.Component {

  constructor(props){
    super(props);
//    nameArr = [];
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

        for (var i = 0; i < responseJson.length; i++) {
            nameArr.push(responseJson[i].name);
        }

        this.setState({
          isLoading: false,
          name: nameArr
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
            <ScrollView>
        <Text style={styles.headerText}>Recipe List</Text>
        {
          nameArr.map((param, index) => {
            return (
              <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]} key={index}>
                <Button
                  onPress={() => this.props.navigation.navigate('Recipes',  {SymptomLink: this.state.SymptomType, RecipeIndex: index})}
                  title={param}
                  color={ this.getRandomColor() }
                />
              </View>
            )
          })
        }
        </ScrollView>
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
