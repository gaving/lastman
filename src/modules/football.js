import * as types from "../actions/actionTypes";

const initialState = {
  loading: false,
  fixtures: []
};

export default function footballReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FIXTURES_LOADING:
      return { loading: true };
    case types.LOAD_FIXTURES_SUCCESS:
      return { loading: false, fixtures: action.result };
    default:
      return state;
  }
}
