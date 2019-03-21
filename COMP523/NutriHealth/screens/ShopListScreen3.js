import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

var SampleArray = ["ONE", "TWO"] ;

export default class ShopListScreen extends Component {

  constructor(props) {
       super(props)
       this.state = {

//         contents: ["Jon", "Ben", "Josh"],
         contents: [
           {
             title: 'Title 1',
             body: 'Hi',
           },
           {
             title: 'Title 2',
             body: 'Bye',
           },
           {
             title: 'Title 3',
             body: 'Lolz',
           }
         ]

         //
         // Holder: ''
       }
     }

  AddItemsToArray=()=>{
      var newArray = this.state.contents.slice();
      newArray.push(
        {
          title: 'Help',
          body: 'Plox',
        }
      );
      this.setState({contents: newArray});
      Alert.alert("Done");
  }

  showItems=()=>{
      for (var i = 0; i < this.state.contents.length; i++) {
        Alert.alert(this.state.contents[i].title + ": " + this.state.contents[i].body);
      }
  }

 render() {
   return (
      <View style={styles.MainContainer}>
          <Button title="Click Here To Add Value To Array" onPress={this.AddItemsToArray} />
          <Button title="Click Here To Show Values in Array" onPress={this.showItems} />
      </View>
   );
 }
}

const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    justifyContent: 'center',
    margin: 15
  }
});
