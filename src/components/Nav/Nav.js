import React, { Component } from 'react';
import Modal from 'react-modal';
import './nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false,
      signUpModalOpen: false,
      username: "",
      password: "",
      warningMessage: ""
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginModalOpen: !this.state.loginModalOpen,
      warningMessage: ""
    });
  }

  toggleSignUp() {
    this.setState({
      signUpModalOpen: !this.state.signUpModalOpen,
      warningMessage: ""
    })
  }

  updateUsername(e) {
    const text = e.target.value;
    this.setState({ username: text });
  }

  updatePassword(e) {
    const text = e.target.value;
    this.setState({ password: text });
  }

  login(e) {
    e.preventDefault();
    console.log("Calling log in");
    var pass = this.state.password;
    var user = this.state.username;
    console.log(this.state.username);
    if (pass !== "" && user !== "") {
      var jsonData = {
        username: this.state.username,
        password: this.state.password
      }
      // make fetch request to the server (POST to /login)
      fetch('http://localhost:8000/login', { method: 'POST', body: jsonData }).then((res) => {
        return res.json();
      }).then((json) => {
        console.log(json);
        console.log(json.status);
        if (json.status == 200) {
          this.props.setLoggedIn(true, json.token);
        }
        this.toggleLogin();
      })
      // get  response
      // set logged in state (200 = logged in)
      // **store token** for other requests to server
      // cookie if web or app state, async storage w/ react native
    } else {
      this.setState({
        warningMessage: "You must provide a username and password"
      })
    }

  }

  logout(e) {
    console.log("Calling log out");
    this.props.setLoggedIn(false, "");
  }

  signUp(e) {
    e.preventDefault();
    console.log("Calling sign up");
    var pass = this.state.password;
    var user = this.state.username;
    if (pass !== "" && user !== "") {
      var jsonData = {
        username: user,
        password: pass
      }
      // make fetch request to the server (POST to /sign-up)
      fetch('http://localhost:8000/sign-up', { method: 'POST', body: jsonData }).then((res) => {
        return res.json();
      }).then((json) => {
        console.log(json);
        console.log(json.status)
        if (json.status == 200) {
          this.props.setLoggedIn(true, json.token);
        }
        this.toggleSignUp();
      })
    } else {
      this.setState({
        warningMessage: "You must provide a username and password"
      })
    }
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
              <label htmlFor="username"> Username </label>
              <input name="username" type="text" value={this.state.username} onChange={this.updateUsername} />
              <label htmlFor="password"> Password </label>
              <input name="password" type="password" value={this.state.password} onChange={this.updatePassword}/>
              <p> {this.state.warningMessage} </p>
              <div className="modalFooter">
                <button onClick={this.toggleLogin}> Cancel </button>
                <button onClick={(event) => {
                  this.login(event);
                }}> Log In </button>
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
              <label htmlFor="username"> Username </label>
              <input name="username" type="text" value={this.state.username} onChange={this.updateUsername}/>
              <label htmlFor="password"> Password </label>
              <input name="password" type="password" value={this.state.password} onChange={this.updatePassword}/>
              <p> {this.state.warningMessage} </p>
              <div className="modalFooter">
                <button onClick={this.toggleSignUp}> Cancel </button>
                <button onClick={(event) => {
                  this.signUp(event);
                }}> Sign Up </button>
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
    transform             : 'translate(-50%, -50%)',
    width                 : '40%',
    maxWidth             : '400px'
  }
};

export default Nav;
