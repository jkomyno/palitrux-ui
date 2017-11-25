import * as React from 'react';
import {
  DropTargetSpec,
  DropTargetCollector,
  DropTarget,
} from 'react-dnd';
import * as cx from 'classnames';
import './DropTargetBox.css';
import { Props, InjectedProps } from './types';

class DropTargetBox extends React.PureComponent<Props> {
  get injected() {
    return this.props as InjectedProps;
  }

  get classNames() {
    return cx(
      'container-box',
      {
        'scale active': this.injected.isOver && this.injected.canDrop,
      },
    );
  }

  render() {
    const {
      connectDropTarget,
    } = this.injected;

    console.log('this.injected', this.injected);

    return connectDropTarget(
      <div className={this.classNames}>
        <div className="box fadeIn">

        </div>
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