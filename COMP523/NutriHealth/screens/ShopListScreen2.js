import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button } from 'react-native';

var arr = [];

export default class ShopListScreen2 extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://fathomless-springs-92490.herokuapp.com/nausea')
      .then((response) => response.json())
      .then((responseJson) => {

        for (var i = 0; i < responseJson.length; i++) {
            arr.push(responseJson[i].name);
        }

        this.setState({
          isLoading: false,
          name: arr,
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
          arr.map((param, x) => {
            return (
              <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]} key={x}>
                <Button
                  onPress={() => this.props.navigation.navigate('Type')}
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
});
