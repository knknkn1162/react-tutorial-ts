import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Clock extends React.Component<{}, {date: Date, timerID: NodeJS.Timer}> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      date: new Date(),
      timerID: null,
    };
  }

  // get
  getTimerID() {
    this.setState({timerID: setInterval(
      () => this.tick(),
      1000,
    )});
  }

  componentDidMount() {
    this.getTimerID();
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
