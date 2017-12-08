import React from 'react';
import './events.css';
import { Link } from 'react-router-dom';

const EventCard = ({name, date, address, id}) => (
  <div className="eventCard">
    <Link to={`/events/${id}`}>
      <h2> {name} </h2>
      <p> Date: {date} </p>
      <p> {address} </p>
    </Link>
  </div>
);

export default EventCard;
