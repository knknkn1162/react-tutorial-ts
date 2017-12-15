import * as React from 'react';

interface ISquare {
  value: string;
  onClick: () => void;
}

class Square extends React.Component<ISquare, {}> {
  render() {
    return (
      <button 
        className="square" 
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
