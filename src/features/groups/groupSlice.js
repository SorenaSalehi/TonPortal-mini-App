import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGroupAdded: true,
  userGroups: [],
  groupLoading: false,
  analyzeLoading: false,
  singleAnalyzeId: "",
  singleAnalyzeContent: "",
  allGroupsId: "",
  allGroupsContent: "",
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
      //* from group item
      state.singleAnalyzeId = action.payload;
    },
    clearAnalyze(state) {
      state.singleAnalyzeId = "";
      (state.allGroupsId = ""), (state.singleAnalyzeContent = "");
      state.allGroupsContent = "";
    },
    singleAnalyzeReceive(state, action) {
      state.singleAnalyzeContent = action.payload;
    },
    receiveAllGroupsAll(state, action) {
      state.allGroupsId = action.payload;
    },
    allAnalyzeReceive(state, action) {
      state.allGroupsContent = action.payload;
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
  receiveAllGroupsAll,
  allAnalyzeReceive,
} = groupSlice.actions;

export default groupSlice.reducer;
