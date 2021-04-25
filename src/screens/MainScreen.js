import * as React from 'react';
import { Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

function MainScreen() {
  useEffect(() => {
    if(!checkToken){
      navigator.navigate('Login');
    }
  },[]);

  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>MainScreen!</Text>
      </View>
    </View>
  );
}

export default MainScreen;