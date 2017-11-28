import {
  ADD_FILE,
} from '../types';
import { ActionP } from './';

export namespace Actions {
  export type ADD_FILE = ActionP<File>;
}

export type addFileT = (file: File) => Actions.ADD_FILE;
export const addFile: addFileT = (file) => ({
  type: ADD_FILE,
  payload: file,
});
