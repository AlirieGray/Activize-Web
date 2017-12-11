import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/events';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import './events.css';

const API_KEY = 'AIzaSyB02CWV7S4frCub3d9z8XNeLc6ivkmot0U'; // google places API TODO: secure

class EventForm extends Component {

  constructor(props) {
    super(props);
    this.state={
      name:"",
      date:"",
      address: "",
      placeId: "",
      placeSearch: "",
      description: "",
      organizers:[]
    }
    this.updateEventName = this.updateEventName.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateEventLoc = this.updateEventLoc.bind(this);
    this.updateEventDescription = this.updateEventDescription.bind(this);
    this.handleSelectSuggest = this.handleSelectSuggest.bind(this);
  }

  updateEventName(e) {
    const text = e.target.value;
    this.setState({ name: text });
  }

  updateEventDescription(e) {
    const text = e.target.value;
    this.setState({ description: text });
  }

  updateEventDate(e) {
    const text = e.target.value;
    this.setState({ date: text });
  }

  updateEventLoc(e) {
    this.setState({placeSearch: e.target.value, address: e.target.value});
  }

  handleSelectSuggest(suggest) {
    console.log(suggest.place_id);
    this.setState({placeSearch: "", address: suggest.formatted_address, placeId: suggest.place_id });
    console.log(this.state.placeId)
  }

  render() {
    const {placeSearch, address, placeId} = this.state;
    return (
      <div>
        <form className="formContainer">
          <label htmlFor="name"> Name </label>
          <input name="name" type="text" value={this.state.name} onChange={this.updateEventName}/>
          <label htmlFor="date" > Date </label>
          <input name="date" type="text" value={this.state.date} onChange={this.updateEventDate} />
          <label htmlFor="description" > Description </label>
          <input name="description" type="text" value={this.state.description} onChange={this.updateEventDescription}/>
          <label htmlFor="location" > Location </label>
          <ReactGoogleMapLoader
            params={{
              key: API_KEY,
              libraries: 'places,geocode'
            }}
            render={googleMaps =>
            googleMaps && (
              <div>
                <ReactGooglePlacesSuggest
                  autocompletionRequest={{input: placeSearch}}
                  googleMaps={googleMaps}
                  onSelectSuggest={this.handleSelectSuggest}
                >
                  <input
                    type="text" value={address} placeholder="Search for a location" onChange={this.updateEventLoc}
                  />
                </ReactGooglePlacesSuggest>
              </div>
            )}
          >
          </ReactGoogleMapLoader>
        </form>
        <button type="button" onClick={() => {
            if (this.state.name && this.state.date && this.state.placeId) {
              console.log("place id in button click" + this.state.placeId)
              var newEvent = {name: this.state.name, description: this.state.description, placeId:this.state.placeId, address:this.state.address, date:this.state.date};
              console.log(newEvent)
              this.props.addEvent(newEvent);
            } else {
              console.log("Missing a required field!")
            }
          }}>
        Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
