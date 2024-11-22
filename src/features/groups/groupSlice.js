import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGroupAdded: true,
  userGroups: [],
  groupLoading: false,
  analyzeLoading: false,
  singleAnalyzeId: "",
  singleAnalyzeContent: "",
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
    analyzeLoadingAction(state) {
      state.analyzeLoading = !state.analyzeLoading;
    },
    analyzeOneGroup(state, action) {
      state.singleAnalyzeId = action.payload;
    },
    clearAnalyze(state) {
      state.singleAnalyzeId = "";
      state.singleAnalyzeContent = "";
    },
    singleAnalyzeReceive(state, action) {
      state.singleAnalyze = action.payload;
    },
  },
});

export const {
  groupAdded,
  userGroupsReceived,
  groupLoadingAction,
  analyzeLoadingAction,
  analyzeOneGroup,
  clearAnalyze,
  singleAnalyzeReceive,
} = groupSlice.actions;

export default groupSlice.reducer;
