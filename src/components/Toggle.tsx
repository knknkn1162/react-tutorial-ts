import * as React from 'react';
import * as ReactDOM from 'react-dom';


class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax. not function
  // (property) LoggingButton.handleClick: () => void
  // otherwise, `this` will be undefined.
  // In JavaScript, class methods are not bound by default.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root'),
);

export default LoggingButton;
