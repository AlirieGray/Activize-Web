import React, { Component } from 'react';
import './events.css';

// class EventCard extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className="eventCard">
//         <p> Here it is </p>
//         <h2> {this.props.name} </h2>
//         <p> {this.props.date} </p>
//         <p> {this.props.address} </p>
//       </div>
//     );
//   }
// }

const EventCard = ({name, date, address}) => (
  <div className="eventCard">
    <p> Here it is </p>
    <h2> {this.props.name} </h2>
    <p> {this.props.date} </p>
    <p> {this.props.address} </p>
  </div>
);

export default EventCard;
