import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import {observer} from 'mobx-react';

@observer
class MissionScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>MissionScreen</Text>
      </View>
    );
  }
}
export default MissionScreen;