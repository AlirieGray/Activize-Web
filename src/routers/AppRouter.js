import React from 'react';
import '../App.css';
import { Redirect } from 'react-router';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Events from '../components/Events/Events';
import EventForm from '../components/Events/EventForm';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/events" component={Events}/>
        <Route path="/new-event" component={EventForm}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
