import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import AuthReducer from "../features/auth/authSlice";

export default configureStore({
  "reducer": {
    "counter": counterReducer,
    "auth": AuthReducer
  }
});
