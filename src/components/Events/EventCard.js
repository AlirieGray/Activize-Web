import React from 'react';
import './events.css';

const EventCard = ({name, date, loc}) => (
  <div className="eventCard">
    <h2> {name} </h2>
    <p> Date: {date} </p>
    <p> {loc} </p>
  </div>
);

export default EventCard;
