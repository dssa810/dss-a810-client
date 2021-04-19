import * as React from 'react';
import NaviComp from './src/components/NaviComp.js';
// // import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './src/screens/login/LoginScreen';
// import MainScreen from './src/screens/main/MainScreen';
import Routes from './src/route/Routes.js';
// import NaviBottom from './src/components/NaviBottom.js';

// const Stack = createStackNavigator();

function App() {
  return (
    <Routes/>
    // <NaviBottom/>
  );
}

export default App;