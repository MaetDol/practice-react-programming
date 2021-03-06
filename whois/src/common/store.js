import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchReucder from '../search/state';
import searchSaga from '../search/state/saga';
import userReducer from '../user/state';
import userSaga from '../user/state/saga';
import commonReducer from '../common/state';
import authReducer from '../auth/state';
import authSaga from '../auth/state/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  common: commonReducer,
  search: searchReucder,
  user: userReducer,
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({}); // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([searchSaga(), userSaga(), authSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
