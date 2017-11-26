import {
  ADD_FILE,
} from '../types';
import { ActionP } from './';

export namespace Actions {
  export type ADD_FILE = ActionP<File>;
}

type addFileT = (file: File) => Actions.ADD_FILE;
const addFile: addFileT = (file) => ({
  type: ADD_FILE,
  payload: file,
});

export default {
  addFile,
};
