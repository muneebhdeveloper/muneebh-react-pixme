import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: { name: "muneeb" },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.GET_CURRENT_USER:
      return {
        ...state,
      };

    case UserActionTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
