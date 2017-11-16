import React, { Component } from 'react';
import './events.css';
const TestData = require('./TestData.json');

class EventCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eventCard">
        <h2> {this.props.name} </h2>
        <p> {this.props.date} </p>
        <p> {this.props.address} </p>
      </div>
    );
  }
}

export default EventCard;
