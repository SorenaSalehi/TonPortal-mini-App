import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGroupAdded: false,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    groupAdded(state) {
      state.isGroupAdded = true;
    },
  },
});

export const { groupAdded } = groupSlice.actions;

export default groupSlice.reducer;
