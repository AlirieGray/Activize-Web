import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='nav-container'>
        <h1> Activize </h1>
        <div className='links'>
          <a href="#"> Events </a>
          <a href="#"> About </a>
          <a href="#">  </a>
        </div>
      </div>
    );
  }
}

export default Nav;
