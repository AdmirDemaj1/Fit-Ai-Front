// File: src/store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { dietReducer } from './reducers/dietReducer';
import { dailyDietReducer } from './reducers/dailyDietReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  diet: dietReducer,
  dailyDiet: dailyDietReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
