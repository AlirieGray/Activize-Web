import React, { Component } from 'react';
import Modal from 'react-modal';
import './nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false,
      signUpModalOpen: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginModalOpen: !this.state.loginModalOpen
    });
  }

  toggleSignUp() {
    this.setState({
      signUpModalOpen: !this.state.signUpModalOpen
    })
  }

  login() {
    console.log("Calling log in");
    // get  200 response
    // set logged in state
    // **store token** for other requests to server
    // cookie if web or app state, async storage w/ react native
  }

  logout() {
    console.log("Calling log out");
  }

  signUp() {
    console.log("Calling sign up");
  }

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
              <button onClick={this.toggleLogin}> Login </button>
              <button onClick={this.toggleSignUp}> Sign Up </button>
            </div>
          </div>
        </header>

        <Modal
          isOpen={this.state.loginModalOpen}
          contentLabel="loginModal"
          onRequestClose={this.toggleLogin}
          style={modalStyle}
          >
          <div>
            <form>
              <label for="username"> Username </label>
              <input name="username" type="text"/>
              <label for="password"> Password </label>
              <input name="password" type="password"/>
              <div className="modalFooter">
                <button onClick={this.toggleLogin}> Cancel </button>
                <button onClick={this.login}> Log In </button>
              </div>
            </form>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.signUpModalOpen}
          contentLabel="signUpModal"
          onRequestClose={this.toggleSignUp}
          style={modalStyle}
          >
          <div>
            <form>
              <label for="username"> Username </label>
              <input name="username" type="text"/>
              <label for="password"> Password </label>
              <input name="password" type="password"/>
              <div className="modalFooter">
                <button onClick={this.toggleSignUp}> Cancel </button>
                <button onClick={this.signUp}> Sign Up </button>
              </div>
            </form>
          </div>
        </Modal>

      </div>
    );
  }
}

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default Nav;
