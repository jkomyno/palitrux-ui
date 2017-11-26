import * as React from 'react';
import './ColorStripes.css';

interface InjectedProps {
  colors: Array<string>;
}

export default class ColorStripes extends React.PureComponent {
  
  get injected() {
    return this.props as InjectedProps;
  }
  
  renderColorStripes = () => (
    this.injected.colors.map(color => (
      <div
        key={color}
        className="flex1"
        style={{ backgroundColor: {color} }}  
      />
    ))
  )
  
  render() {
    return (
      <div className="flex-container">
        {this.renderColorStripes()}
      </div>
    );
  }
}