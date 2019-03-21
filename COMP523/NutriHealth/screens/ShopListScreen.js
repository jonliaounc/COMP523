import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class ShopListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List',
  };

  constructor(props){
    super(props);
    this.state={
      checked1:false,
      checked2:false,
      checked3:false,
      checked4:false,
      checked5:false,
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.name}>Baked Haddock with Thyme:</Text>
        <CheckBox title='1 filet of fresh haddock'
          checked={this.state.checked1}
          onPress={() => this.setState({checked1: !this.state.checked1})}
        />
        <CheckBox title='1/2 cup bread crumbs'
          checked={this.state.checked2}
          onPress={() => this.setState({checked2: !this.state.checked2})}
        />
        <CheckBox title='1/4 cup low-fat milk (or unsweetened coconut, almond milks)'
          checked={this.state.checked3}
          onPress={() => this.setState({checked3: !this.state.checked3})}
        />
        <CheckBox title='1/8 cup Parmesan cheese'
          checked={this.state.checked4}
          onPress={() => this.setState({checked4: !this.state.checked4})}
        />
        <CheckBox title='1/8 teaspoon ground thyme'
          checked={this.state.checked5}
          onPress={() => this.setState({checked5: !this.state.checked5})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    backgroundColor: 'rgb(75, 156, 211)',
    fontWeight: 'bold',
    padding: 12
  },
});
