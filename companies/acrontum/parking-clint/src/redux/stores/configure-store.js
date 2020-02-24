import { createStore } from 'redux';
import counterReducer from '../reducers/lot-reducer';

export default defaultState => {
    const store = createStore(counterReducer, defaultState);
    return store;
};
