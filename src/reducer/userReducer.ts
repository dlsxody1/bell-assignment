import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/userStore";
import uuid from "react-uuid";
import { IUserProps } from "../types/UserTypes";

const initialState = {
  users: [{ id: "", password: "", uuid: uuid() }] as IUserProps[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUser(state, action) {
      const index = state.users.findIndex(
        (user) => user.uuid === action.payload.uuid
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;
