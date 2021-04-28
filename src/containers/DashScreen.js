import React from 'react';
import { StyleSheet, View } from 'react-native'
import {observer} from 'mobx-react';
import MainStore from '../store/mainStore';


import { Layout, Text, ViewPager } from '@ui-kitten/components';

@observer
class DashScreen extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: MainStore.email,
      password: MainStore.password,
      activeIndex:0,
      index:0
    };
  }

  render() {
    return (
      <>
        <Text>DashScreen</Text>
        <Text>email : {this.state.email}</Text>
        <Text>password : {this.state.password}</Text>
        <ViewPager
          selectedIndex={this.state.activeIndex}
          onSelect={index => setSelectedIndex(index)}>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>USERS</Text>
          </Layout>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>ORDERS</Text>
          </Layout>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>TRANSACTIONS</Text>
          </Layout>
        </ViewPager>
      </>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashScreen;