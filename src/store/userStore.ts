import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userResultSlice } from "../reducer/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    result: userResultSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
