import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export const ExampleStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
