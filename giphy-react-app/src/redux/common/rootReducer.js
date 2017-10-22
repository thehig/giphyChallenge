import { combineReducers } from 'redux';
import featureReducer from '../feature/reducers';

const reducerMap = {
    feature: featureReducer
};

export default combineReducers(reducerMap);
