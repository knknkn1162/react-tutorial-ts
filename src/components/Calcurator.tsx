import * as React from 'react';


function BoilingVerdict(props: {celsius: number}) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component<{}, {temperature: string}> {
  constructor(props: {}) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState(
      {temperature: e.currentTarget.value}
    );
  }

  render() {
    const temperature = this.state.temperature;
    return (
      // group forms
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />

        <BoilingVerdict
          celsius={parseFloat(temperature)} />

      </fieldset>
    );
  }
}

export default Calculator;
