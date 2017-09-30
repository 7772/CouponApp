'use strict'
// React
import React from 'react';
import { createStore } from 'redux';

// Redux
import { Provider } from 'react-redux';
import store from './../reducers/index';
// Navigation
import TabBarNavigation from './tabBar/views/TabBarNavigation';

//let store = createStore(reducer);

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
