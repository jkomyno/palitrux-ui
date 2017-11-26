import { isType } from 'typescript-fsa';
import { Action } from 'redux';
import { ActionCreator } from '../actions';
import {
  ADD_FILE,
} from '../types';

const addFile = ActionCreator<File>(ADD_FILE);

export type State = {
  readonly droppedFile?: File,
}
export const initialState: State = {
  droppedFile: undefined,
};

// type ReducerT = (state: State, action: Action) => State;
export default (state = initialState, action: Action): State => {
  if (isType(action, addFile)) {
    return {
      ...state,
      droppedFile: action.payload,
    };
  }

  return state;
}