import * as React from 'react';
import { Button, View } from 'react-native';

function NaviComp({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="GO TO MAIN"
          onPress={ () => navigation.push('Main')}
        />
        <Button
          title="GO TO ACTIVITY"
          onPress={ () => navigation.push('Activity')}
        />
        <Button
          title="GO TO COUPON"
          onPress={ () => navigation.push('Coupon')}
        />
      </View>
    );
  }

  export default NaviComp;