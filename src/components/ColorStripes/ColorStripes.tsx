import * as React from 'react';
import * as cx from 'classnames';
import { Props } from './types';
import './ColorStripes.css';

const getRowColorClassNames = (idx: number) =>
  cx(
    'flex1',
    {
      'left': idx % 2 === 0,
      'right': idx % 2 === 1
    }
  );

export default class ColorStripes extends React.PureComponent<Props> {

  renderColorStripes = () => (
    this.props.colorList.map(({ color, percentage }, idx) => (
      <div
        key={color}
        className={getRowColorClassNames(idx)}
        style={{ backgroundColor: color }}  
      >
        <span>
          {color}, {percentage}%
        </span>
      </div>
    ))
  )
  
  render() {
    return (
      <div className="flex-container slide-up">
        {this.renderColorStripes()}
      </div>
    );
  }
}