import { combineReducers } from 'redux';
import { default as featureReducer } from '../actions/reducers';

const reducerMap = {
    feature: featureReducer
};

export default combineReducers(reducerMap);
