import React, { Component } from 'react';
import Routers from './Route';
import {Provider} from 'react-redux';
import store from './store';

class Main extends Component {
    render() {
      return (
        <Provider store={store}>
          <Routers />
        </Provider>
      );
    }
  }
  
  export default Main;