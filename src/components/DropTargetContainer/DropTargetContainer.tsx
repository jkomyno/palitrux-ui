import * as React from 'react';
import { DragDropContext, DragDropContextProvider } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import DropTargetBox from '../DropTargetBox';
import { onDropT } from '../DropTargetBox/types';
import { addFile } from '../../redux/actions/files';
import { fetchColorRequested } from '../../redux/actions/colors';
import { Props, MapDispatchToProps, MapStateToProps } from './types';
import { RootState } from '../../redux/reducers';
import './DropTargetContainer.css';

class DropTargetContainer extends React.PureComponent<Props & MapStateToProps & MapDispatchToProps> {

  handleFileDrop: onDropT = (item, monitor) => {
    if (monitor) {
      const droppedFiles = (monitor.getItem() as any).files;
      this.props.addFile(droppedFiles[0] as File);
      this.props.fetchColorRequested(droppedFiles[0] as File, 3);
    }
  }

  render() {
    const { FILE } = NativeTypes;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="wrapper">
          <DropTargetBox
            accepts={[FILE]}
            onDrop={this.handleFileDrop}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

const mapStateToProps = ({ colors }: RootState) => ({
  colors: colors.colors,
});

const ConnectedDropTargetContainer = connect(mapStateToProps, {
  addFile,
  fetchColorRequested,
})(DropTargetContainer);

export default DragDropContext(HTML5Backend)(ConnectedDropTargetContainer);