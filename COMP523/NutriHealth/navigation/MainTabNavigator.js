import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import SymptomScreen from '../screens/SymptomScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ShopListScreen from '../screens/ShopListScreen';
import ListScreen from '../screens/ListScreen.js';
import FAQScreen from '../screens/FAQScreen';
import ContactScreen from '../screens/Contact.js'
import { colors } from '../src/themes';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Symptom: SymptomScreen,
  Favorites: FavoritesScreen,
  Shopping: ShopListScreen,
  FAQ: FAQScreen,
  Contact: ContactScreen
},  {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: 'white'
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios-home'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const RecipesStack = createStackNavigator(
  {
    Symptom: SymptomScreen,
    List: ListScreen,
    Recipes: RecipesScreen,
  },
  {
    initialRouteName: "Symptom"
  }
);

RecipesStack.navigationOptions = {
  tabBarLabel: 'Recipes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
    />
  ),
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
    />
  ),
};

const ShopListStack = createStackNavigator({
  ShopList: ShopListScreen,
});

ShopListStack.navigationOptions = {
  tabBarLabel: 'Shop List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};

const FAQStack = createStackNavigator({
  Another: FAQScreen,
});

FAQStack.navigationOptions = {
  tabBarLabel: 'FAQ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-help-circle' : 'md-help-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  RecipesStack,
  FavoritesStack,
  ShopListStack,
  FAQStack,
});
