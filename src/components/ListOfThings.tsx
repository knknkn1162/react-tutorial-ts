import * as React from "react";
import { Range } from "immutable";

interface RepeatProps {
  numTimes: number;
  // overwrite
  children: (index: number) => React.ReactNode;
}

// Calls the children callback numTimes to produce a repeated component
class Repeat extends React.Component<RepeatProps, {}> {
  render() {
    
    let items = Range(0, this.props.numTimes).map((i: number) => 
      <div key={i}>{this.props.children(i)}</div>
    ).toArray();
    
    return items
  }
}

function ListOfThings(props: {}) {
  return (
    <Repeat numTimes={10}>
      {(index: number) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

export default ListOfThings;
