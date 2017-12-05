import * as React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, DragDropContextProvider } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import DropTargetBox from '../DropTargetBox';
import { onDropT } from '../DropTargetBox/types';
import { addFile } from '../../redux/actions/files';
import { fetchColorRequested } from '../../redux/actions/colors';
import { Props, MapDispatchToProps, MapStateToProps } from './types';
import { RootState } from '@redux/reducers';
import './DropTargetContainer.css';

class DropTargetContainer extends React.PureComponent<Props & MapStateToProps & MapDispatchToProps> {

  handleFileDrop: onDropT = (item, monitor) => {
    const {
      addFile,
      fetchColorRequested,
    } = this.props;

    // I have to cast the type since monitor.getItem() seems to return a generic Object
    type monitorItemT = {
      files: Array<File>;
    };

    const droppedFiles = (monitor.getItem() as monitorItemT).files;
    // adds the file to the store, not sure if needed.
    // currently, I only support a single file, hence the [0]
    addFile(droppedFiles[0] as File);
    // dispatches the network request
    fetchColorRequested(droppedFiles[0] as File, 3);
  }

  render() {
    const { FILE } = NativeTypes;
    const { colorList } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="wrapper">
          <DropTargetBox
            accepts={[FILE]}
            onDrop={this.handleFileDrop}
            colorList={colorList}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

const mapStateToProps = ({ colors }: RootState) => ({
  colorList: colors.colorList,
});

const ConnectedDropTargetContainer = connect(mapStateToProps, {
  addFile,
  fetchColorRequested,
})(DropTargetContainer);

export default DragDropContext(HTML5Backend)(ConnectedDropTargetContainer);