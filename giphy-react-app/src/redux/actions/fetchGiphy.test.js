import _ from "lodash";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import { expect } from "chai";

import "../../../test/beforeAll.js";

import {
  FETCH_GIPHY_BEGIN,
  FETCH_GIPHY_SUCCESS,
  FETCH_GIPHY_FAILURE,
  FETCH_GIPHY_DISMISS_ERROR
} from "../constants";

import { fetchGiphy, dismissFetchGiphyError, reducer } from "./fetchGiphy";
import initialState from "../initialState";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchGiphy", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // it("handles fetchGiphy success", () => {

  //   const store = mockStore(initialState);

  //   const list = _.times(2, i => ({
  //     data: {
  //       id: `id${i}`,
  //       title: `test${i}`,
  //       url: `http://example.com/test${i}`
  //     }
  //   }));
  //   nock("http://www.reddit.com/")
  //     .get("/r/reactjs.json")
  //     .reply(200, { data: { children: list } });

  //   return store.dispatch(fetchGiphy()).then(() => {
  //   //   const actions = store.getActions();
  //   //   expect(actions[0]).to.have.property(
  //   //     "type",
  //   //     HOME_FETCH_REDDIT_REACTJS_LIST_BEGIN
  //   //   ); //expect
  //   //   expect(actions[1]).to.have.property(
  //   //     "type",
  //   //     HOME_FETCH_REDDIT_REACTJS_LIST_SUCCESS
  //   //   ); //expect
  //   }); //then
  // }); //it

  //   it("handles fetchGiphy failure", () => {
  //     nock("http://www.reddit.com/")
  //       .get("/r/reactjs.json")
  //       .reply(500, null);
  //     const store = mockStore({ redditReactjsList: [] });

  //     return store.dispatch(fetchGiphy()).catch(() => {
  //       const actions = store.getActions();
  //       expect(actions[0]).to.have.property(
  //         "type",
  //         HOME_FETCH_REDDIT_REACTJS_LIST_BEGIN
  //       );
  //       expect(actions[1]).to.have.property(
  //         "type",
  //         HOME_FETCH_REDDIT_REACTJS_LIST_FAILURE
  //       );
  //       expect(actions[1]).to.have.nested.property("data.error").that.exist;
  //     });
  //   });

  //   it("dismissfetchGiphyError", () => {
  //     const expectedAction = {
  //       type: HOME_FETCH_REDDIT_REACTJS_LIST_DISMISS_ERROR
  //     };
  //     expect(dismissfetchGiphyError()).to.deep.equal(expectedAction);
  //   });

  //   it(`reducer should handle ${HOME_FETCH_REDDIT_REACTJS_LIST_BEGIN}`, () => {
  //     const prevState = { fetchGiphyPending: true };
  //     const state = reducer(prevState, {
  //       type: HOME_FETCH_REDDIT_REACTJS_LIST_BEGIN
  //     });
  //     expect(state).to.not.equal(prevState);
  //     expect(state.fetchGiphyPending).to.be.true;
  //   });

  //   it(`reducer should handle ${HOME_FETCH_REDDIT_REACTJS_LIST_SUCCESS}`, () => {
  //     const prevState = { fetchGiphyPending: true };
  //     const state = reducer(prevState, {
  //       type: HOME_FETCH_REDDIT_REACTJS_LIST_SUCCESS,
  //       data: { data: { children: [] } }
  //     });
  //     expect(state).to.not.equal(prevState);
  //     expect(state.fetchGiphyPending).to.be.false;
  //     expect(state.redditReactjsList).to.exist;
  //   });

  //   it(`reducer should handle ${HOME_FETCH_REDDIT_REACTJS_LIST_FAILURE}`, () => {
  //     const prevState = { fetchGiphyPending: true };
  //     const state = reducer(prevState, {
  //       type: HOME_FETCH_REDDIT_REACTJS_LIST_FAILURE,
  //       data: { error: new Error("some error") }
  //     });
  //     expect(state).to.not.equal(prevState);
  //     expect(state.fetchGiphyPending).to.be.false;
  //     expect(state.fetchGiphyError).to.exist;
  //   });

  //   it(`reducer should handle ${HOME_FETCH_REDDIT_REACTJS_LIST_DISMISS_ERROR}`, () => {
  //     const prevState = { fetchGiphyError: new Error("some error") };
  //     const state = reducer(prevState, {
  //       type: HOME_FETCH_REDDIT_REACTJS_LIST_DISMISS_ERROR,
  //       data: {}
  //     });
  //     expect(state).to.not.equal(prevState);
  //     expect(state.fetchGiphyError).to.be.null;
  //   });
});
