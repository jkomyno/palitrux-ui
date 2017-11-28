import * as React from 'react';
import {
  DropTargetSpec,
  DropTargetCollector,
  DropTarget,
} from 'react-dnd';
import * as cx from 'classnames';
import ColorStripes from '../ColorStripes';
import './DropTargetBox.css';
import { Props, InjectedProps } from './types';

class DropTargetBox extends React.PureComponent<Props & InjectedProps> {

  get classNames() {
    return cx(
      'container-box',
      {
        'scale active': this.props.isOver && this.props.canDrop,
      },
    );
  }

  render() {
    const {
      connectDropTarget,
    } = this.props;

    console.log('this.props', this.props);

    return connectDropTarget(
      <div className={this.classNames}>
        <div className="box fadeIn">
          <div className="progress" />
        </div>
        <ColorStripes />
      </div>
    );
  }
}

const typesDT = (props: Props) => props.accepts;
const specDT: DropTargetSpec<Props> = {
  drop(props, monitor) {
    if (props.onDrop) {
      props.onDrop(props, monitor);
    }
  }
};
const collectDT: DropTargetCollector = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

export default DropTarget(typesDT, specDT, collectDT)(DropTargetBox);