import * as React from 'react';

class LoginButton extends React.Component<{onClick: () => void}, {}> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}

class LogoutButton extends React.Component<{onClick: () => void}, {}> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}

class Greeting extends React.Component<{isLoggedIn: boolean}, {}> {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;
  }
}

class LoginControl extends React.Component<{}, {isLoggedIn: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState(
      { isLoggedIn: true },
    );
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
