import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='nav-container'>

            <div className="left">
              <a style={{marginRight:10}} href="/"> <h1> Activize </h1> </a>
              <div className="links">
                <a href="/events"> Events </a>
                <a href="/about"> About </a>
              </div>
            </div>

            <div className='links' style={{paddingTop:10}}>
              <button> Login </button>
              <button> Sign Up </button>
            </div>

          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
