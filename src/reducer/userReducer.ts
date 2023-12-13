import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/userStore";
import uuid from "react-uuid";
import { IUserProps } from "../types/UserTypes";

const initialState = {
  users: [{ id: "", password: "", uuid: uuid() }] as IUserProps[],
  resultUsers: [] as IUserProps[],
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
    resetUser(state) {
      state.users = state.users.map((user) => ({
        ...user,
        id: "",
        password: "",
        uuid: uuid(),
      }));
    },

    deleteUser(state, action) {
      const index = state.users.findIndex(
        (user) => user.uuid === action.payload.uuid
      );
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },

    remainUser(state) {
      state.resultUsers = [...state.users];
      state.users = state.users.map((user) => ({
        ...user,
        id: "",
        password: "",
      }));
    },
  },
});

export const userResultSlice = createSlice({
  name: "result",
  initialState: { result: false },
  reducers: {
    showResult(state) {
      state.result = !state.result;
    },
  },
});

export const { addUser, updateUser, resetUser, deleteUser } = userSlice.actions;
export const { showResult } = userResultSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;
export const selectResult = (state: RootState) => state.result;
export const selectResultUser = (state: RootState) => state.user.resultUsers;

export default userSlice.reducer;
