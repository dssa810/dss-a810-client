import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import {observer} from 'mobx-react';

@observer
class MarketScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>MarketScreen</Text>
      </View>
    );
  }
}
export default MarketScreen;