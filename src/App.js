import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addEvent } from './actions/events';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
