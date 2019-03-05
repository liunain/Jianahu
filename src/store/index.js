import { createStore,applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';//action与store中间件
import reducer from './reducer';

const store =createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;