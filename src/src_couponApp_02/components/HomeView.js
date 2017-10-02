'use strict'
// React
import React from 'react';
import { createStore } from 'redux';

// Redux
import { Provider } from 'react-redux';
import { store } from './../reducers/index';
// Navigation
import TabBarNavigation from './tabBar/views/TabBarNavigation';

import {persistStore} from 'redux-persist'
import { AsyncStorage } from 'react-native';

// let TestStore = persistStore(store, {storage: AsyncStorage});

class HomeView extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

export default HomeView;
