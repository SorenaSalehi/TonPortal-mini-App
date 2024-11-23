import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assetLoading: false,
  analyzeLoading: false,
  singleAnalyzeLoading: false,
  singleAnalyzeToken: "",
  singleAnalyzeContent: "",
  allAssetsToken: "",
  allAssetsContent: "",
};
const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    assetsAnalyzeLoadingAction(state) {
      state.analyzeLoading = !state.analyzeLoading;
    },
    analyzeOneToken(state, action) {
      state.singleAnalyzeToken = action.payload;
    },
    oneAssetAnalyzeReceive(state, action) {
      state.singleAnalyzeContent = action.payload;
    },
    allAssetsAnalyze(state, action) {
      state.allAssetsContent = action.payload;
    },
    clearAssetsAnalyze(state) {
      state.allAssetsContent = "";
      state.singleAnalyzeContent = "";
    },
  },
});

export const {
  assetsAnalyzeLoadingAction,
  oneAssetAnalyzeReceive,
  allAssetsAnalyze,
  clearAssetsAnalyze,
  analyzeOneToken,
} = assetsSlice.actions;

export default assetsSlice.reducer;
