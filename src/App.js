import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { addEvent } from './actions/events';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

// TODO: use json
store.dispatch(addEvent({name:"Free the Nipple"} ));
store.dispatch(addEvent({name:"No Borders No Violence"} ));
store.dispatch(addEvent({name:"Animal Liberation"} ));
store.dispatch(addEvent({name:"Tax the R0B0ts"} ));

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
