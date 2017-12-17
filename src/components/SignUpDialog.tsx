import * as React from "react";
import { ReactElement } from "react";

interface FancyBorderProps {
  color: string;
}

/**
 * USAGE: <FancyBorder>Hello!<FancyBorder>
 */
class FancyBorder extends React.Component<FancyBorderProps, {}> {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

interface DialogProps {
  title: string;
  message: string;
}

class Dialog extends React.Component<DialogProps, {}> {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {this.props.title}
        </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
        {this.props.children}
      </FancyBorder>
    );
  }
}

interface SignUpDialogState {
  login: string;
}


class SignUpDialog extends React.Component<{}, SignUpDialogState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      login: ''
    };
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState(
      {login: e.currentTarget.value},
    );
  }

  handleSignUp = (e: React.FormEvent<HTMLButtonElement>): void => {
    alert(`Welcome aboard, ${this.state.login}!`);
    e.preventDefault();
  }
}


export default SignUpDialog;
