import * as React from 'react';
import { Button, View, Text } from 'react-native';

function MainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Main')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Login')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default MainScreen;