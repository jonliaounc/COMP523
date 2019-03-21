import React from 'react';
import { ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class TypeScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal Type',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Which Type of Meal Do You Want?</Text>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Example')}
            title="Breakfast"
            color="#00B0FF"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Example')}
            title="Brunch"
            color="#EC407A"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Example')}
            title="Lunch"
            color="#1DE9B6"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Example')}
            title="Dinner"
            color="#FF3D00"
          />
        </View>

        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={() => this.props.navigation.navigate('Example')}
            title="Dessert"
            color="#90A4AE"
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
