import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assetLoading: false,
  assetsAnalyzeLoading: false,
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
      state.assetsAnalyzeLoading = !state.assetsAnalyzeLoading;
    },
    analyzeOneToken(state, action) {
      state.singleAnalyzeToken = action.payload;
    },
    allTokenSymbols(state, action) {
      state.allAssetsToken = action.payload;
    },
    oneAssetAnalyzeReceive(state, action) {
      state.singleAnalyzeContent = action.payload;
    },
    allAssetsAnalyzeReceive(state, action) {
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
  allAssetsAnalyzeReceive,
  clearAssetsAnalyze,
  analyzeOneToken,
  analyzeAllToken,
  allTokenSymbols,
} = assetsSlice.actions;

export default assetsSlice.reducer;
