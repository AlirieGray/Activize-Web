import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='nav-container'>
            <a href="/">
              <h1> Activize </h1>
            </a>
            <div className='links'>
              <a href="/events"> Events </a>
              <a href="/about"> About </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
