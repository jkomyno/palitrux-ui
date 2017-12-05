import { isType } from 'typescript-fsa';
import { Action } from 'redux';
import { ActionCreator } from '../actions';
import {
  COLOR_FETCH_REQUESTED,
  COLOR_FETCH_SUCCEDED,
  COLOR_FETCH_FAILED,
} from '../types';

const fetchColorRequested = ActionCreator<File>(COLOR_FETCH_REQUESTED);
const fetchColorSucceded = ActionCreator<Array<ColorsT>>(COLOR_FETCH_SUCCEDED);
const fetchColorFailed = ActionCreator<string>(COLOR_FETCH_FAILED);

export type ColorsT = {
  color: string;
  percentage: string;
};

export type State = {
  readonly colorList: Array<ColorsT>,
  readonly loading: boolean,
  error?: string,
};
export const initialState: State = {
  colorList: [],
  loading: false,
  error: undefined,
};

export default (state = initialState, action: Action): State => {
  if (isType(action, fetchColorRequested)) {
    return {
      ...state,
      loading: true,
      colorList: [],
    };
  }
  if (isType(action, fetchColorSucceded)) {
    return {
      ...state,
      loading: false,
      colorList: action.payload,
    };
  }
  if (isType(action, fetchColorFailed)) {
    return {
      ...state,
      loading: false,
      colorList: [],
      error: action.payload,
    };
  }

  return state;
};