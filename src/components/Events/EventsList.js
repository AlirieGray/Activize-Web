import React, { Component } from 'react';
import EventCard from './EventCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/events';
import './events.css';
//const TestData = require('./TestData.json');

class EventList extends Component {

  componentWillMount() {
    // get events from db
    this.props.getEvents();
  }

  render() {
    return(
      <div className="eventsContainer">
        {this.props.events.map(({name, date, address, _id, placeId}, index) => {
          return (<EventCard key={index} name={name} date={date} id={_id} address={address} placeId={placeId} />);
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
