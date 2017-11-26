import {
  COLOR_FETCH_REQUESTED,
  COLOR_FETCH_SUCCEDED,
  COLOR_FETCH_FAILED,
} from '../types';
import { ActionP } from './';

export namespace Actions {
  export type COLOR_FETCH_REQUESTED = ActionP<File>;
  export type COLOR_FETCH_SUCCEDED = ActionP<Array<string>>;
  export type COLOR_FETCH_FAILED = ActionP<string>;
}

type fetchColorRequestedT = (file: File, limit: number) => Actions.COLOR_FETCH_REQUESTED;
const fetchColorRequested: fetchColorRequestedT = (file, limit) => ({
  type: COLOR_FETCH_REQUESTED,
  payload: file,
});


type fetchColorSuccededT = (colors: Array<string>) => Actions.COLOR_FETCH_SUCCEDED;
const fetchColorSucceded: fetchColorSuccededT = (colors) => ({
  type: COLOR_FETCH_SUCCEDED,
  payload: colors,
});


type fetchColorFailedT = (message: string) => Actions.COLOR_FETCH_FAILED;
const fetchColorFailed: fetchColorFailedT = (message) => ({
  type: COLOR_FETCH_FAILED,
  payload: message,
});

export default {
  fetchColorRequested,
  fetchColorSucceded,
  fetchColorFailed,
};
