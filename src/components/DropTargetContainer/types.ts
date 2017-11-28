import { addFileT } from '../../redux/actions/files';
import { fetchColorRequestedT } from '../../redux/actions/colors';
import { ColorsT } from '../../redux/reducers/colors';

export interface Props {

}

export interface MapStateToProps extends Props {
  colors: Array<ColorsT>;
}

export interface MapDispatchToProps extends Props {
  addFile: addFileT;
  fetchColorRequested: fetchColorRequestedT;
}