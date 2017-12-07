import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/events';
import './events.css';

class EventForm extends Component {

  constructor(props) {
    super(props);
    this.state={
      name:"",
      date:"",
      loc: "",
      organizers:[]
    }
    this.updateEventName = this.updateEventName.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateEventLoc = this.updateEventLoc.bind(this);
  }

  updateEventName(e) {
    const text = e.target.value;
    this.setState({ name: text });
  }

  updateEventDate(e) {
    const text = e.target.value;
    this.setState({ date: text });
  }

  updateEventLoc(e) {
    const text = e.target.value;
    this.setState({ lox: text });
  }

  render() {
    return (
      <div>
        <form className="formContainer">
          <label htmlFor="name"> Name </label>
          <input name="name" type="text" value={this.state.name} onChange={this.updateEventName}/>
          <label htmlFor="name" type="text" value={this.state.date} onChange={this.updateEventDate}> Date </label>
          <input name="date" />
          <label htmlFor="name" type="text" value={this.state.loc} onChange={this.updateEventLoc}> Location </label>
          <input name="location" />
        </form>
        <button type="button" onclick={() => {
            this.props.addEvent({name: this.state.name, loc:this.state.loc, date:this.state.date});
          }}>
        Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
