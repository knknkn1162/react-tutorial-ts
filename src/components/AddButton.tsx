import * as React from "react";


interface AddButtonProps {
  onSubmit: (s: string) => void;
}

class AddButton extends React.Component<AddButtonProps, {input: string}> {
  constructor(props: AddButtonProps) {
    super(props)
    this.state = {
      input: "",
    }
  }
  onFormSubmit = (): void => {
    if(!this.state.input.trim()) {
      return
    }
    this.props.onSubmit(this.state.input);
    this.setState({
      input: ""
    });
  }

  onInputChange = (): void => {
    this.setState({
      input: this.state.input,
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
        >
          <input
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddButton;