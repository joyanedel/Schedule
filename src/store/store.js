import { createStore, combineReducers } from 'redux';
import Reducer from '../reducers/blockReducer';

const reducer = combineReducers({data: Reducer});
const store = createStore(reducer);

export default store;
