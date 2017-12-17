import * as React from 'react';

class NameForm extends React.Component<{}, {value: string}> {
  constructor(props: {}) {
    super(props);
    this.state = {value: ''};

  }

  handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState(
      {value: e.currentTarget.value}
    );
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
