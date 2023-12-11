import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/userStore";
import uuid from "react-uuid";

interface IUserProps {
  id: string;
  password: string;
  uuid: string;
}

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
    confirmUser(state, action) {},
  },
});

export const { addUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;
