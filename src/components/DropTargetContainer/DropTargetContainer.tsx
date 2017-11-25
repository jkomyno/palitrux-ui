import * as React from 'react';
import { DragDropContext, DragDropContextProvider } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import DropTargetBox from '../DropTargetBox';
import { onDropT } from '../DropTargetBox/types';
import './DropTargetContainer.css';

class DropTargetContainer extends React.PureComponent {
  state = {
    droppedFiles: [],
  };

  handleFileDrop: onDropT = (item, monitor) => {
    if (monitor) {
      const droppedFiles = (monitor.getItem() as any).files;
      this.setState({
        droppedFiles,
      });
    }
  }

  render() {
    const { FILE } = NativeTypes;
    console.log('this.state', this.state);
    // const { droppedFiles } = this.state;

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

export default DragDropContext(HTML5Backend)(DropTargetContainer);