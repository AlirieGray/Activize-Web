import React from 'react';
import EventCard from './EventCard';
import { connect } from 'react-redux';
import './events.css';
//const TestData = require('./TestData.json');

const GetEvents = (events) => {
  events.map((event, index) => {
    return <EventCard key={index} name={event.name} date={event.date} address={event.address} />
  })
}

const Events = (props) => (
  <div>
    {GetEvents(props.events)}
  </div>
)

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Events);
