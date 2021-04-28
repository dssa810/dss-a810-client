import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from 'mobx-react';
import DashScreen from './DashScreen';
import MissionScreen from './MissionScreen';
import PointScreen from './PointScreen';
import MarketScreen from './MarketScreen';

import { ApplicationProvider, Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';


const Tab = createBottomTabNavigator();

@observer
class TabsScreen extends React.Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
        <Tab.Navigator 
          initialRouteName="Dash"
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen 
            name="Dash" 
            component={DashScreen} 
          />
          <Tab.Screen name="Mission" component={MissionScreen} />
          <Tab.Screen name="Point" component={PointScreen} />
          <Tab.Screen name="Market" component={MarketScreen} />
        </Tab.Navigator>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon : {
    width : 32,
    height : 32
  }
});


export default TabsScreen;