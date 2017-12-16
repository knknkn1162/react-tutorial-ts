import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Welcome extends React.Component<{name: string}, {}> {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

function app(): JSX.Element {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default app;
