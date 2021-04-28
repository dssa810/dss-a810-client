import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStore from './src/store/mainStore';
import TokenStore from './src/store/tokenStore';

import LoginScreen from './src/containers/LoginScreen';
import TabsScreen from './src/containers/TabsScreen';

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Tabs"
          component={TabsScreen}
        />
        {/* {MainStore.isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : TokenStore.token == '' ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        ) : (
          // User is signed in
          <Stack.Screen
            name="Tabs"
            component={TabsScreen}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;