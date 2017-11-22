import footballApi from "../api";
import config from "../config/config";
import * as types from "./actionTypes";

export function loadFixtures(gameWeekId) {
  return function(dispatch) {
    dispatch(loadFixturesLoading());
    return footballApi.fixtures
      .getGameweek(config.CHAMPIONSHIP, gameWeekId)
      .then(footballs => {
        dispatch(loadFixturesSuccess(footballs.fixtures));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadFixturesLoading(result) {
  return { type: types.LOAD_FIXTURES_LOADING, result };
}

export function loadFixturesSuccess(result) {
  return { type: types.LOAD_FIXTURES_SUCCESS, result };
}
