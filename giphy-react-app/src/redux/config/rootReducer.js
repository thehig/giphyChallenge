import { combineReducers } from 'redux';
import featureReducer from '../reducers';

const reducerMap = {
    feature: featureReducer
};

export default combineReducers(reducerMap);
