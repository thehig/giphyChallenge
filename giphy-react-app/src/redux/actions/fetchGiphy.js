import axios from 'axios';

import {
  FETCH_GIPHY_BEGIN,
  FETCH_GIPHY_SUCCESS,
  FETCH_GIPHY_FAILURE,
  FETCH_GIPHY_DISMISS_ERROR,
} from '../constants';

export function fetchGiphy() {
  return {
    type:FETCH_GIPHY_BEGIN
  };
}

export function dismissFetchGiphyError() {
  return {
    type:FETCH_GIPHY_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_GIPHY_BEGIN:
      return state
        .set('fetchGiphyPending', true)
        .set('fetchGiphyError', null);

    case FETCH_GIPHY_SUCCESS:
      return state
        .set('fetchGiphyPending', false)
        .set('fetchGiphyError', null)
        .set('giphyResults', action.data.data.children);

    case FETCH_GIPHY_FAILURE:
      return state
        .set('fetchGiphyPending', false)
        .set('fetchGiphyError', null)
        .set('fetchGiphyError', action.data.error);

    case FETCH_GIPHY_DISMISS_ERROR:
      return state
        .set('fetchGiphyError', null);

    default:
      return state;
  }
}
