import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import MainScreen from '../screens/main/MainScreen';
import ActivityScreen from '../screens/activity/ActivityScreen';
import CouponScreen from '../screens/coupon/CouponScreen';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Coupon" component={CouponScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;


