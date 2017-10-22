import { fromJS } from "immutable";

const initialState = fromJS({
  giphyResults: [],
  fetchGiphyError: null,
  fetchGiphyPending: false
});

export default initialState;
