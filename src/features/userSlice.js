import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthenticated(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { userAuthenticated } = userSlice.actions;

export default userSlice.reducer;
