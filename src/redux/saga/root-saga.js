import { takeLatest, takeEvery } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { getUser } from "../user/user.saga";

export function* watcherSaga() {
  yield takeLatest(UserActionTypes.GET_CURRENT_USER, getUser);
}
