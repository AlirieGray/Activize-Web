import React, { Component } from 'react';
import Nav from '../Nav/Nav'


class About extends Component {
  render() {
    return (
      <div>
        <Nav setLoggedIn = {this.setLoggedIn} loggedIn = {this.props.loggedIn} />
        <div className="container" style={{"align-items":"center"}}>
          <div className="pContainer">
            <h2> For Organizers </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam at rutrum libero. Nam mattis, dolor vitae finibus pretium,
            leo est finibus lectus, nec maximus purus metus a enim. Nullam
            fringilla vestibulum ultricies. </p>
            <p> Cras bibendum imperdiet orci et venenatis. Sed ipsum metus,
            commodo et quam nec, blandit tincidunt nisl. Nam varius lacinia
            diam, at scelerisque arcu varius eget. Donec leo nisl, auctor non
            tempus sit amet, luctus vitae felis. </p>
            <h2>For Participants </h2>
            <p>  In malesuada, tortor ac efficitur mattis, libero nisi placerat
            libero, non imperdiet eros turpis sed odio. Suspendisse ultricies
            gravida lorem sit amet convallis. Suspendisse consectetur, ex eu
            venenatis sagittis, enim velit aliquam arcu, quis sagittis nisi
            velit a sem. Curabitur vehicula lobortis mauris. Aliquam consectetur
            efficitur orci, tincidunt consequat ligula placerat et. Aliquam sit
            amet purus sed enim faucibus accumsan. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
