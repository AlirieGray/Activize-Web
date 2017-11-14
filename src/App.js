import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import EventForm from './components/Events/EventForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.setLoggedIn = this.setLoggedIn.bind(this)
  }

  setLoggedIn(isLoggedIn) {
    console.log("set logged in running")
    this.setState({
      loggedIn: isLoggedIn
    })
  }

  render() {

    const RenderHome = (props) => {
      return <Home setLoggedIn = {this.setLoggedIn} loggedIn = {this.state.loggedIn} {...props} />
    }

    const RenderAbout = (props) => {
      return <About setLoggedIn = {this.setLoggedIn} loggedIn = {this.state.loggedIn} {...props} />
    }

    const RenderNewEvent = (props) => {
      return <EventForm setLoggedIn = {this.setLoggedIn} loggedIn = {this.state.loggedIn} newEent={true} {...props} />
    }

    const RenderEvents = (props) => {
      return <Events setLoggedIn = {this.setLoggedIn} loggedIn = {this.state.loggedIn} {...props} />
    }

    return (
      <Router>
        <div>
          <main>
            <Route exact path="/" render={RenderHome}/>
            <Route path="/about" render={RenderAbout}/>
            <Route path="/events" render={RenderEvents}/>
            <Route path="/new-event" render={RenderNewEvent}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
