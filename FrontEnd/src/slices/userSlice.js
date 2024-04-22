
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => {
  const stateTest = state.user.user;
  return JSON.parse(localStorage.getItem("user"));
}

export default userSlice.reducer;
