import { all } from 'redux-saga/effects';
import { watchFetchColor } from './colors';

export default function* rootSaga() {
  yield all([
    watchFetchColor(),
  ]);
}