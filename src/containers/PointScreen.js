import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import {observer} from 'mobx-react';

@observer
class PointScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>PointScreen</Text>
      </View>
    );
  }
}
export default PointScreen;