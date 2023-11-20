import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocalStorage, getUserFromLocalStorage } from "./localStorage";
import { Root2 } from "../../Constants/UserTypes";
import { useGetUsersQuery } from "../Api/UserApi";

interface InitialStateType {
  userLogin: { email: string; password: string };
  users: Root2[] | undefined;
}

const initialState: InitialStateType = {
  userLogin: getUserFromLocalStorage(),
  users: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.userLogin = action.payload;
      addUserToLocalStorage(action.payload);
    },
    addToUsers(state, action) {
      state.users = action.payload;
    },
    updateStatus(state, action) {
      // let targetUser = state.users?.find((user) => user.id === action.payload);
      // if (targetUser) {
      // }
      state.users = state.users?.map((user) =>
        user.id === action.payload ? { ...user, status: "blacklist" } : user
      );
    },
  },
});
export default loginSlice.reducer;
export const { updateUser, addToUsers, updateStatus } = loginSlice.actions;
