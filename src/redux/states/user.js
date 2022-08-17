import { createSlice } from "@reduxjs/toolkit";

const emptyUser = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: emptyUser,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return emptyUser;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
