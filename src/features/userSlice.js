import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  authError: "",
  authLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthenticated(state, action) {
      state.userId = action.payload;
    },
    isAuthError(state) {
      state.authError = true;
    },
  },
});

export const { userAuthenticated, isAuthError } = userSlice.actions;

export default userSlice.reducer;
