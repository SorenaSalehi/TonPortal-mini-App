import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGroupAdded: true,
  userGroups: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    groupAdded(state) {
      state.isGroupAdded = true;
    },
    userGroupsReceived(state, action) {
      state.userGroups = action.payload;
    },
  },
});

export const { groupAdded, userGroupsReceived } = groupSlice.actions;

export default groupSlice.reducer;
