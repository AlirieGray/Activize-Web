import React, { Component } from 'react';
import EventCard from './EventCard';
import { connect } from 'react-redux';
import './events.css';
//const TestData = require('./TestData.json');

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.events[0]);
    return(
      <div className="eventsContainer">
        {this.props.events.map(({name, date, address}, index) => {
          return (<EventCard key={index} name={name} date={date} address={address} />);
        })}
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
