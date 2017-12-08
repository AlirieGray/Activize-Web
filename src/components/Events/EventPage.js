import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/events';


class EventPage extends Component {

  componentWillMount() {
    console.log(this.props.match.params.id)
    this.props.getEventById(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <h1> Name </h1>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentEvent: state.currentEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
