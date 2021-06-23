import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

window.store = store;