import { UserActionTypes } from "./user.types";

export const setCurrentUser = (state) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: state,
});
export const getCurrentUser = () => ({
  type: UserActionTypes.GET_CURRENT_USER,
});
export const clearCurrentUser = () => ({
  type: UserActionTypes.CLEAR_CURRENT_USER,
});
