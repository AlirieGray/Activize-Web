import React, { Component } from 'react';
import EventCard from './EventCard';
import { connect } from 'react-redux';
import './events.css';
//const TestData = require('./TestData.json');

class EventList extends Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(events) {
    events.map((event, index) => {
      console.log('running')
      console.log(event.name)
      return <p> event.name </p>
      //return <EventCard key={index} name={event.name} date={event.date} address={event.address} />
    })
  }

  render() {
    console.log(this.props.events[0])
    return(
      <div>
        Events
        <div>
          {this.getEvents(this.props.events)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(EventList);
