import _ from "lodash";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import { expect } from "chai";
import { fromJS } from "immutable";

import "../../../test/beforeAll.js";
import { exampleSearch } from "./fetchGiphy.mock";

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
  describe("dispatches", () => {
    afterEach(() => {
      nock.cleanAll();
    });

    // it(`${FETCH_GIPHY_DISMISS_ERROR}`, () => {
    //   expect(dismissFetchGiphyError()).to.deep.equal({
    //     type: FETCH_GIPHY_DISMISS_ERROR
    //   });
    // });

    it(`${FETCH_GIPHY_SUCCESS}`, () => {
      const store = mockStore(initialState);

      nock("https://api.giphy.com")
        .get("/v1/gifs/search")
        .reply(200, exampleSearch);

      return store.dispatch(fetchGiphy()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property("type", FETCH_GIPHY_BEGIN);
        expect(actions[1]).to.have.property("type", FETCH_GIPHY_SUCCESS);
      });
    }); //it

    it(`${FETCH_GIPHY_FAILURE}`, () => {
      const store = mockStore(initialState);

      nock("https://api.giphy.com")
        .get("/v1/gifs/search")
        .reply(500, null);

      return store.dispatch(fetchGiphy()).catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property("type", FETCH_GIPHY_BEGIN);
        expect(actions[1]).to.have.property("type", FETCH_GIPHY_FAILURE);
        expect(actions[1]).to.have.nested.property("data.error").that.exist;
      });
    }); 
  }); //describe

  describe("reducer", () => {
    it(`should handle ${FETCH_GIPHY_BEGIN}`, () => {
      const prevState = fromJS({ fetchGiphyPending: false });
      const state = reducer(prevState, {
        type: FETCH_GIPHY_BEGIN
      });
      expect(state).to.not.equal(prevState);
      expect(state.get("fetchGiphyPending")).to.be.true;
    });

    it(`should handle ${FETCH_GIPHY_SUCCESS}`, () => {
      const prevState = fromJS({ fetchGiphyPending: true });
      const state = reducer(prevState, {
        type: FETCH_GIPHY_SUCCESS,
        data: { data: { children: [] } }
      });
      expect(state).to.not.equal(prevState);
      expect(state.get("fetchGiphyPending")).to.be.false;
      expect(state.get("giphyResults")).to.exist;
    });

    it(`should handle ${FETCH_GIPHY_FAILURE}`, () => {
      const prevState = fromJS({ fetchGiphyPending: true });
      const state = reducer(prevState, {
        type: FETCH_GIPHY_FAILURE,
        data: { error: new Error("some error") }
      });
      expect(state).to.not.equal(prevState);
      expect(state.get("fetchGiphyPending")).to.be.false;
      expect(state.get("fetchGiphyError")).to.exist;
    });

    it(`should handle ${FETCH_GIPHY_DISMISS_ERROR}`, () => {
      const prevState = fromJS({ fetchGiphyError: new Error("some error") });
      const state = reducer(prevState, {
        type: FETCH_GIPHY_DISMISS_ERROR
      });
      expect(state).to.not.equal(prevState);
      expect(state.get("fetchGiphyError")).to.be.null;
    });
  }); //describe
});
