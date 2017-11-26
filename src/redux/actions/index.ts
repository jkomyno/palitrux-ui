import actionCreatorFactory from 'typescript-fsa';
import { Action } from 'redux';

export interface ActionP<P> extends Action {
  payload: P,
};
export const ActionCreator = actionCreatorFactory();
