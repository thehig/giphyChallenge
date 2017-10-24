import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { FETCH_GIPHY_BEGIN, FETCH_GIPHY_SUCCESS, FETCH_GIPHY_FAILURE } from "./constants";
import { fetchGiphy } from "./api";

function* fetchGiphySaga(action) {
  try {
    const giphyResults = yield call(fetchGiphy, action.meta);
    yield put({
      type: FETCH_GIPHY_SUCCESS,
      payload: giphyResults
    });
  } catch (e) {
    yield put({ type: FETCH_GIPHY_FAILURE, payload: { message: e.message } });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_GIPHY_BEGIN, fetchGiphySaga);
}

export default mySaga;