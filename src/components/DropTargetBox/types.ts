import {
  DropTargetMonitor,
  ConnectDropTarget,
} from 'react-dnd';
import { ColorsT } from '@redux/reducers/colors';

export type onDropT = (props: Props, monitor: DropTargetMonitor) => void;

export interface Props {
  accepts: Array<string>,
  onDrop: onDropT,
  colorList: Array<ColorsT>;
}

export interface InjectedProps extends Props {
  connectDropTarget: ConnectDropTarget,
  isOver: boolean,
  canDrop: boolean,
}