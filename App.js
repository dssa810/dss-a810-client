import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './src/navigator/AppNavigation';
import {StoreProvider} from './src/store/Context';
import {RootStore} from './src/store/RootStore';

const rootStore = new RootStore();

export default () => (
  <>
    <StoreProvider value={rootStore}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </StoreProvider>
  </>
);
