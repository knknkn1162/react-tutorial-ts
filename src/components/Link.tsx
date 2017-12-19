import * as React from 'react';

interface LinkProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

class Link extends React.Component<LinkProps, {}> {

  onAnchorClick = (e: React.FormEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a
        href=""
        onClick={this.onAnchorClick}
      >
      {this.props.children}
      </a>
    )
  }
}

export default Link;
