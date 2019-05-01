import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Button, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../src/themes';

var nameArr = [];

export default class ListScreen extends React.Component {

//jon
  constructor(props){
    super(props);
    nameArr = [];
    this.state = {
      isLoading: true,
      SymptomType: this.props.navigation.state.params.SymptomType
    }
    link = "https://fathomless-springs-92490.herokuapp.com/" + this.state.SymptomType;
  }
//jon
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
    //refactored by eric

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ScrollView style={styles.dividers}>
        <View style={styles.container} backgroundColor={"orange"}>
          <Text style={styles.headerText}>Recipe List</Text>

        </View>
        {
          nameArr.map((param, index) => {
            return (
              // <View style={styles.container} key={index}>
              //   <Button
              //     onPress={() => this.props.navigation.navigate('Recipes',  {SymptomLink: this.state.SymptomType, RecipeIndex: index})}
              //     title={param}
              //     //color={ this.getRandomColor() }
              //     //width="100%"
              //     //style={styles.container}
              //   />
              // </View>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Recipes',  {SymptomLink: this.state.SymptomType, RecipeIndex: index})}>
                <View style={styles.container} key={index}>
                  <Text style={styles.symptomText}>{param}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </ScrollView>


      //   <TouchableWithoutFeedback
      //     onPress={() => this.props.navigation.navigate('Recipes',  {SymptomLink: this.state.SymptomType, RecipeIndex: index})}
      //     title={param}
      //     //color={ this.getRandomColor()}
      //   >
      //     <View style={styles.container}>
      //       <Text style={styles.headerText2}>Recipe List</Text>
      //       {
      //         nameArr.map((param, index) => {
      //           return (
      //             <View style={styles.symptomText} key={index}>
      //             </View>
      //           )
      //         })
      //       }
      //     </View>
      //   </TouchableWithoutFeedback>
      // </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  //eric
  container: {
    padding:10,
    //flex: 1,
    //justifyContent: "center",
    //backgroundColor: colors.primary,
    //borderTopWidth:2,
    //borderTopColor: colors.primary,
    borderBottomWidth:2,
    borderBottomColor: colors.primary,

  },
  listDividers:{
    fontSize: 20,
    color: 'black',
    textAlign: "center",
    margin:10,
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
    fontWeight: "bold"
  },
  headerText2: {
    fontSize: 30,
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
  },
  paragraph: {
    textAlign: "center"
  }
});
