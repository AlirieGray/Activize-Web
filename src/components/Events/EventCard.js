import React, { Component } from 'react';
import './events.css';

const EventCard = ({name, date, address}) => (
  <div className="eventCard">
    <h2> {name} </h2>
    <p> Date: {date} </p>
    <p> {address} </p>
  </div>
);

export default EventCard;
