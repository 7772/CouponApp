'use strict'
// React
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// Navigation
import TabBarNavigation from './tabBar/views/TabBarNavigation';

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
