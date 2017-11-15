import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import EventCard from './EventCard';
import './events.css';
const TestData = require('./TestData.json');

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents() {
    return TestData.events.map((event) => {
      return <EventCard name={event.name} date={event.date} address={event.address}/>
    })
  }

  render() {
    return (
      <div>
        <Nav setLoggedIn = {this.setLoggedIn} loggedIn = {this.props.loggedIn}/>
        {/*<a className="newEventLink" href="/new-event">
          + Create Event
        </a>*/}
        <div className="eventsContainer">
          {this.getEvents()}
        </div>
      </div>
    );
  }
}

export default Events;
