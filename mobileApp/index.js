import React from 'react';
import { AppRegistry } from 'react-native';
import Login from './Activities/Login';
import Register from './Activities/Register'
import CurrentDay from './Activities/CurrentDay';
import DaysSet from './Activities/DaysSet';
import DietHub from './Activities/DietHub';
import DaysSetList from './Activities/DaysSetList';
import SupplyGenerator from './Activities/SupplyGenerator';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Login: { screen: Login },
  CurrentDay: { screen: CurrentDay },
  DietHub: { screen: DietHub },
  Register: { screen: Register },
  DaysSet: { screen: DaysSet },
  DaysSetList: { screen: DaysSetList },
  SupplyGenerator: { screen: SupplyGenerator }
}, {
    headerMode: 'none'
  });


AppRegistry.registerComponent('mobileApp', () => App);
