import React, { Component } from 'react';
import Job from './Job';
import HomeScreen from './HomeScreen';


import {createStackNavigator, createAppContainer} from 'react-navigation';




const Nav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Job: {screen: Job},
});

const Navigation = createAppContainer(Nav);

export default Navigation;

