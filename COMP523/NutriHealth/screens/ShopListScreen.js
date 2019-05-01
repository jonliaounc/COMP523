import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors } from '../src/themes';

export default class ShopListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List',
  };
//jon
  constructor(props){
    super(props);
    this.state={
      checked1:false,
      checked2:false,
      checked3:false,
      checked4:false,
    }
  }

  render() {
    //logic: jon, styling: eric
    return (
      <View>
        <Text style={styles.name}>Ginger Mint Tea:</Text>
        <CheckBox style ={styles.ingredientName} title='1 cup of water'
          checked={this.state.checked1}
          onPress={() => this.setState({checked1: !this.state.checked1})}
        />
        <CheckBox title='1 (1-inch) piece fresh ginger peeled and thinly sliced'
          checked={this.state.checked2}
          onPress={() => this.setState({checked2: !this.state.checked2})}
          style ={styles.ingredientName}
        />
        <CheckBox title='1 mint tea bag'
          checked={this.state.checked3}
          onPress={() => this.setState({checked3: !this.state.checked3})}
          style ={styles.ingredientName}
        />
        <CheckBox title='1 tablespoon honey'
          checked={this.state.checked4}
          onPress={() => this.setState({checked4: !this.state.checked4})}
          style ={styles.ingredientName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //eric
  name: {
    backgroundColor: colors.primary,
    fontWeight: 'bold',
    padding: 12,
    fontSize: 23,
  },
  ingredientName: {
    fontSize: 18,

  }
});
