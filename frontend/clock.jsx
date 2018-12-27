
import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var day = days[ this.state.time.getDay() ];
    var month = months[ this.state.time.getMonth() ];
    const date = this.state.time.getDate();
    const year = this.state.time.getFullYear();

    let hour = this.state.time.getHours();
    let min = this.state.time.getMinutes();
    let sec = this.state.time.getSeconds();

    hour = (hour < 10) ? `0${hour}` : hour; 
    sec = (sec < 10) ? `0${sec}` : sec ; 
    min = (min < 10) ? `0${min}` : min; 

    return (
      <div className="clock-main">
        <h1>Clock Widget!</h1>
        <div className="time-date">
          <div className="time-div">
            <h2>Time:</h2>
            <h2>{hour}:{min}:{sec} PDT</h2>
          </div>
          
          <div className="time-div">
            <h2>Date:</h2>
            <h2>{day} {month} {date} {year}</h2>
          </div>

        </div>
      </div>
    );
  }
}

