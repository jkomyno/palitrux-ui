import * as React from 'react';
import Popup from '../Popup';
import DropTargetContainer from '../DropTargetContainer';

export default class App extends React.PureComponent {
  render() {
    return [
      (
        <Popup
          key="popup"
          title="Palitrux"
          message="Drop your pic below"
        />
      ),
      <DropTargetContainer key="dropTargetContainer" />
    ];
  }
}