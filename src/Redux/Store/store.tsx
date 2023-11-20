import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Features/LoginSlice";
import { userApi } from "../Api/UserApi";
export const store = configureStore({
  reducer: {
    user: loginReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
