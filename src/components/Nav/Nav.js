import React, { Component } from 'react';
//import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';
import './nav.css';

// in progress: new method w/ no Modal for now
class Nav extends Component {
  render() {
    // console.log(this.props.isAuthenticated);
    console.log(`the authenticated  is: ${this.props.auth.isAuthenticated}`)
    return (
      <div>
      <header>
        <div className='nav-container'>
          <div className="left">
            <a style={{marginRight:10}} href="/"> <h1> Activize </h1> </a>
            <div className="links">
              <Link to="/about"> About </Link>
              <Link to="/events"> Events </Link>
            </div>
          </div>
          <div className='links' style={{paddingTop:10}}>
            {!this.props.auth.isAuthenticated && <Link to="/login"> Log In </Link>}
            {!this.props.auth.isAuthenticated && <Link to="/signup"> Sign Up </Link>}
            {this.props.auth.isAuthenticated && <Link to="/new-event"> Create Event </Link>}
            {this.props.auth.isAuthenticated && <button onClick={
              () => this.props.logoutUser() }>
              Logout
            </button>}
          </div>
        </div>
      </header>
      </div>
    );

  }
}

/*
class Nav extends Component {

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

  logout(e) {
    console.log("Calling log out");
    logoutUser();
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
      fetch('http://localhost:8000/sign-up', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, *',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      }).then((res) => {
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

*/


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
