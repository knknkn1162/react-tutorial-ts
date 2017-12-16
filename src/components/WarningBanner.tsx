import * as React from 'react';

class WarningBanner extends React.Component<{warn: boolean}, {}> {
  render() {
    if (!this.props.warn) {
      return null;
    }
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
}

class Page extends React.Component<{}, {showWarning: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showWarning: true
    }
  }

  // set as property
  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page;
