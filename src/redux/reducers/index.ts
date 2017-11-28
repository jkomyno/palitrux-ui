import { combineReducers } from 'redux';
import files, { State as FilesState } from './files';
import colors, { State as ColorsState } from './colors';

export type RootState = {
  files: FilesState,
  colors: ColorsState,
};

export default combineReducers<RootState>({
  files,
  colors,
});