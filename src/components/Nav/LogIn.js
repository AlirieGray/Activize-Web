import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';


class LogIn extends Component {

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
              this.props.loginUser({username: this.state.username, password: this.state.password});
          }}>
          Log In
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
