import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
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
      (
        <Provider key="dropTargetContainerProvider" store={store}>
          <DropTargetContainer />
        </Provider>
      ),
    ];
  }
}