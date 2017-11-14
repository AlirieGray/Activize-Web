import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './events.css';

class EventForm extends Component {

  constructor(props) {
    super(props);
    this.state={
      name:"",
      date:"",
      lat:"",
      lng:"",
      organizers:[]
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form className="formContainer">
            <label for="name"> Name </label>
            <input name="name" />
            <label for="name"> Date </label>
            <input name="date" />
            <label for="name"> Location </label>
            <input name="location" />
          </form>
        </div>
      </div>
    );
  }
}

export default EventForm;
