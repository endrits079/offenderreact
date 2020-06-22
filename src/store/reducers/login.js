import * as actionTypes from "../actions/actionTypes";
const initialState = {
  token: null,
};

const login = (state, token) => {
  return { ...state, token };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action.token);
    default:
      return state;
  }
};

export default reducer;
