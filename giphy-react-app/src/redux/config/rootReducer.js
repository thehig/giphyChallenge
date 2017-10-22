import { combineReducers } from 'redux-immutable';
import { default as featureReducer } from '../actions/reducers';

const reducerMap = {
  feature: featureReducer,
};

export default combineReducers(reducerMap);
