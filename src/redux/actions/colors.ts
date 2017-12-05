import {
  COLOR_FETCH_REQUESTED,
  COLOR_FETCH_SUCCEDED,
  COLOR_FETCH_FAILED,
} from '../types';
import { ActionP } from './';
import { ColorsT } from '../reducers/colors';

export namespace Actions {
  export type COLOR_FETCH_REQUESTED = ActionP<File>;
  export type COLOR_FETCH_SUCCEDED = ActionP<Array<ColorsT>>;
  export type COLOR_FETCH_FAILED = ActionP<string>;
}

export type fetchColorRequestedT = (file: File, limit: number) => Actions.COLOR_FETCH_REQUESTED;
export const fetchColorRequested: fetchColorRequestedT = (file, limit) => ({
  type: COLOR_FETCH_REQUESTED,
  payload: file,
});

export type fetchColorSuccededT = (colorList: Array<ColorsT>) => Actions.COLOR_FETCH_SUCCEDED;
export const fetchColorSucceded: fetchColorSuccededT = (colorList) => ({
  type: COLOR_FETCH_SUCCEDED,
  payload: colorList,
});

export type fetchColorFailedT = (message: string) => Actions.COLOR_FETCH_FAILED;
export const fetchColorFailed: fetchColorFailedT = (message) => ({
  type: COLOR_FETCH_FAILED,
  payload: message,
});
