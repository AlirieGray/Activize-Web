import React, { Component } from 'react';
import Nav from '../Nav/Nav'


class Home extends Component {
  render() {
    return (
      <div>
        <Nav setLoggedIn = {this.setLoggedIn} loggedIn = {this.props.loggedIn}/>
      </div>
    );
  }
}

export default Home;
