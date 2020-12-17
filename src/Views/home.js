import React, { Component } from "react";
import CardCompact from '../Components/cardCompact';

class Home extends Component {
  render() {
    let container = (
      <CardCompact
        bigIcon={<i className="fa fa-clock-o text-warning" />}
        statsText="Res. Time"
        statsValue={100}
      />)

    
    return <h6>Tracer Samsung</h6>
  }
}

export default Home;