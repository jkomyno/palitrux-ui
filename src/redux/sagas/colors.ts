import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import colorsAction, { Actions } from '../actions/colors';
import { fetchColor as fetchColorAPI } from '../../services/api';
import { COLOR_FETCH_REQUESTED } from '../types';

export function* fetchColor(action: Actions.COLOR_FETCH_REQUESTED) {
  try {
    const colors = yield call(fetchColorAPI, action.payload);
    yield put(colorsAction.fetchColorSucceded(colors));
  } catch ({ message }) {
    yield put(colorsAction.fetchColorFailed(message));
  }
}

export function* watchFetchColor() {
  yield takeLatest(COLOR_FETCH_REQUESTED, fetchColor);
}