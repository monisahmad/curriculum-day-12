import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Date.now(),
      elapsedTime: 0,
    };
    this.start = this.start.bind(this);
    this.calculateElapsedTime = this.calculateElapsedTime.bind(this);
  }
  componentDidMount() {
    setTimeout(this.calculateElapsedTime(), 1000);
  }
  componentWillUpdate() {
    console.log('updated');
  }

  calculateElapsedTime() {
    this.setState({ elapsedTime: Number(Date.now()) - Number(this.state.startTime) });
  }
  start() {
    this.setState({ startTime: Date.now() });
  }

  render() {
    return (
      <div>
        <div>{this.state.elapsedTime}
        </div>
        <div>
          <button onClick={this.start}> start </button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
