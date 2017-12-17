import * as React from "react";

interface CounterButtonProps {
  color: string;
}

class CounterButton extends React.PureComponent<CounterButtonProps, {count: number}>{
  constructor(props: CounterButtonProps) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={"red"}
        onClick={() => this.setState(state => ({count: this.state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
