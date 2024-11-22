import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGroupAdded: true,
  userGroups: [],
  groupLoading: false,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    groupLoadingAction(state) {
      state.groupLoading = !state.groupLoading;
    },
    groupAdded(state) {
      state.isGroupAdded = true;
    },
    userGroupsReceived(state, action) {
      state.userGroups = action.payload;
    },
  },
});

export const { groupAdded, userGroupsReceived, groupLoadingAction } =
  groupSlice.actions;

export default groupSlice.reducer;
