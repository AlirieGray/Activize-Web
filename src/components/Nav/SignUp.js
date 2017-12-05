import React, { Component, PropTypes } from 'react'
import { loginUser } from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e) {
  const text = e.target.value;
  this.setState({ username: text });
}

updatePassword(e) {
  const text = e.target.value;

  this.setState({ password: text });
  
}

  render() {
    return(
      <div>
        <form>
          <label htmlFor="username"> Username </label>
          <input name="username" type="text" value={this.state.username} onChange={this.updateUsername} />
          <label htmlFor="password"> Password </label>
          <input name="password" type="password" value={this.state.password} onChange={this.updatePassword}/>
        </form>
        <button
          type="button"
          onClick={() => {
              this.props.signUpUser({username: this.state.username, password: this.state.username});
          }}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
