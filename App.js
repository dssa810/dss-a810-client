import React from 'react';

import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import PointScreen from './src/screens/PointScreen';
import { useEffect } from 'react/cjs/react.development';

const Tab = createBottomTabNavigator();
const [isSigned, setIsSigned] = useState(false);
useEffect(() => {
  const isToken = isSignedIn();
  console.log(isToken)
  setIsSigned(isToken);
},[])


function TabsScreen() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Point" component={PointScreen} />
    </Tab.Navigator>
  );
}

async function isSignedin() {
  const token = await AsyncStorage.getItem('token');
  if(token == null) {
    return false;
  } else {
    return true;
  }
}
const Stack = createStackNavigator();

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
            }}
          />
          {
            isSigned == false ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',
              }}
            />
          ) : (
            <Stack.Screen name="Tabs" component={TabsScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    <LoginScreen />
  </ApplicationProvider>
);