import * as React from 'react';

class FlavorForm extends React.Component<{}, {value: string}> {
  constructor(props: {}) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({value: e.currentTarget.value});
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
