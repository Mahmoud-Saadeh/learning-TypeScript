import React, { Component } from 'react';

interface CompProps {
  color?: string;
}

export default class Comp extends Component<CompProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

// interface CompProps {
//   color?: string;
// }

// const Comp = (props: CompProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// export default Comp;
