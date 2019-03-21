import React, {Component} from 'react';
import { ScrollView, StyleSheet, Button, View, Text } from 'react-native';

export default class FavoritesScreen extends React.Component {

  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    return (
      <View style={styles.container}>
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Strawberry Raspberry Soup"
          color="#00B0FF"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Sweet Potato Pancakes with Apple Walnut Topping"
          color="#EC407A"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Raisin Bran Muffins"
          color="#1DE9B6"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Prune Pudding"
          color="#FF3D00"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Fiber-Filled Trail Mix"
          color="#90A4AE"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Blueberry-Banana-Oatmeal Smoothie"
          color="green"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Chicken Salad"
          color="brown"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Yam Veggie Wraps"
          color="purple"
        />
      </View>

      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => this.props.navigation.navigate('Example')}
          title="Fruity Gelatin"
          color="red"
        />
      </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});
