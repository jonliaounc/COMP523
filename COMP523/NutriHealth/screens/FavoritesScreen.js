import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import { colors } from '../src/themes';

export default class FavoritesScreen extends React.Component {

  static navigationOptions = {
    //eric
    title: 'Favorites',
    headerTitleStyle:{
      color: 'black',
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      alignItems: 'center'
    }
  };

  render() {
    return (
      //eric & jon
      <View style={styles.dividers}>
        <TouchableOpacity>
          <View style={styles.container} backgroundColor={"gold"}>
            <Text style={styles.headerText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Example')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Yam Veggie Wraps</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Example')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Raisin Bran Muffins</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Example')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Prune Pudding</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Example')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Chicken Salad</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Example')}>
          <View style={styles.container}>
            <Text style={styles.buttonText}>Fruity Gelatin</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  //eric
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
    position: 'absolute',
    //bottom: 60,
    width: "100%",

  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    margin: 30,
  },
  button: {
    padding: 20,
    margin: 10,
    //width: 400,
    height: 40,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    fontSize: 20,
    //color: 'rgba(0,0,0,0.5)'  <- transparent text
    color: 'black',
    textAlign: "center",
    margin: 30,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: 'white'
  }
});
