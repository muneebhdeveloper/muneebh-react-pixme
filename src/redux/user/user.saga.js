import axios from "axios";
import { setCurrentUser } from "./user.action";
import { put, call } from "redux-saga/effects";

function getUserRequest() {
  return axios.request({
    method: "get",
    baseURL: "http://localhost:8000/profile",
  });
}

export function* getUser() {
  try {
    const { data } = yield call(getUserRequest);
    yield put(setCurrentUser(data));
  } catch (err) {
    console.log("error", err);
  }
}
