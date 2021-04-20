import * as React from 'react';
import { Text, View } from 'react-native';

function ActivityScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style= {{ fontSize: 30 }}>ActivityScreen!</Text>
      </View>
    </View>
  );
}

export default ActivityScreen;