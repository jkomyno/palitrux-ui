import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer, { RootState } from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState?: RootState) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancer = composeWithDevTools(
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