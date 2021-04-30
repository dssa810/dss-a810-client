import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailsScreen} from '../screen/DetailsScreen';
import {SplashScreen} from '../screen/SplashScreen';
import {LoginScreen} from '../screen/LoginScreen';
import {HomeScreen} from '../screen/HomeScreen';
import {MobxScreen} from '../screen/MobxScreen';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomeScreen} />

    <Screen name="Mobx" component={MobxScreen} />

    <Screen name="Splash" component={SplashScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="Login" component={LoginScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
