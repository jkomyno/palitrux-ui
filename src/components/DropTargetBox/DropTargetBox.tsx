import * as React from 'react';
import {
  DropTargetSpec,
  DropTargetCollector,
  DropTarget,
  DropTargetMonitor,
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

  renderColorStripes = () => {
    const {
      isOver,
      colorList,
    } = this.props;

    if (
      !isOver &&
      !!colorList.length
    ) {
      return <ColorStripes colorList={colorList} />;
    }

    return null;
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={this.classNames}>
        <div className="box fadeIn">
          <div className="progress" />
        </div>
        {this.renderColorStripes()}
      </div>
    );
  }
}

const typesDT = (props: Props) => props.accepts;
const specDT: DropTargetSpec<Props> = {
  drop(props: Props, monitor: DropTargetMonitor) {
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