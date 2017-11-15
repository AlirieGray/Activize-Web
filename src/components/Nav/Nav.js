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

    let loginLogout = null;
    let signUpOrNewEvent = null;
    let newEventLink = null;
    // if logged in
    if (this.props.loggedIn) {
      loginLogout = <button onClick={this.logout}> Logout </button>
      signUpOrNewEvent = <a href="/new-event"> Create Event </a>
    // if not logged in
    } else {
      loginLogout = <button onClick={this.toggleLogin}> Login </button>
      signUpOrNewEvent = <button onClick={this.toggleSignUp}> Sign Up </button>
    }

    return (
      <div>
        <header>
          <div className='nav-container'>
            <div className="left">
              <a style={{marginRight:10}} href="/"> <h1> Activize </h1> </a>
              <div className="links">
                <a href="/about"> About </a>
                <a href="/events"> Events </a>
              </div>
            </div>
            <div className='links' style={{paddingTop:10}}>
              {signUpOrNewEvent}
              {loginLogout}
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
