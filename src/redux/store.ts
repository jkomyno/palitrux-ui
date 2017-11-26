import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState?: RootState) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancer = compose(
    applyMiddleware(...middlewares),
  );

  return createStore(
    rootReducer,
    initialState!,
    enhancer,
  );
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;