import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import SymptomScreen from '../screens/SymptomScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ShopListScreen2 from '../screens/ShopListScreen2';
import FAQScreen from '../screens/FAQScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Symptom: SymptomScreen,
  Favorites: FavoritesScreen,
  Shopping: ShopListScreen2,
  FAQ: FAQScreen
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
  ShopList: ShopListScreen2,
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
