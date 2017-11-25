import {
  DropTargetMonitor,
  ConnectDropTarget,
} from 'react-dnd';

export type onDropT = (props: Props, monitor: DropTargetMonitor | undefined) => void;

export interface Props {
  accepts: Array<string>,
  onDrop: onDropT,
}

export interface InjectedProps extends Props {
  connectDropTarget: ConnectDropTarget,
  isOver: boolean,
  canDrop: boolean,
}