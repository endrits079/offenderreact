import * as actionTypes from "./actionTypes";

export const Login = (token) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN, token });
  };
};
