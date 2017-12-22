import * as React from 'react';
import Link from './Link';
import { VisibleType, filterTitles } from "../states/Filter";


interface FooterProps {
  filter: VisibleType;
  onLinkClick: (filter: VisibleType) => void;
}

class Footer extends React.Component<FooterProps, {}> {
  render() {
    const VisibleTypes =[
      VisibleType.SHOW_ALL,
      VisibleType.SHOW_ACTIVE,
      VisibleType.SHOW_COMPLETED
    ];
    return (
      <div>
        <p>Show:
        {" "}
        </p>
        <ul>
          {
            VisibleTypes.map(filter => 
              <li key={filter}>
                <Link
                  active={this.props.filter === filter}
                  children={filterTitles[filter]}
                  onClick={() => this.props.onLinkClick(filter)}
                />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Footer;
