import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletConnectLoading: false,
  isWalletModalOpen: false,
  isWalletConnected: true,
  walletAddress: "",
  isWalletSettingOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    walletActions(state) {
      state.isWalletModalOpen = state.isWalletModalOpen ? false : true;
    },

    walletConnected(state) {
      state.isWalletConnected = true;
    },
    walletDisconnected(state) {
      state.isWalletConnected = false;
    },
    walletSettingClicked(state) {
      state.isWalletSettingOpen = state.isWalletSettingOpen ? false : true;
    },
    // closeWalletSetting(state, action) {
    //   console.log(action.payload.animVal);

    //   state.isWalletSettingOpen =
    //     action.payload.animVal !== "walletSetting"
    //       ? false
    //       : state.isWalletSettingOpen;
    // },
  },
});

export const {
  walletConnected,
  walletDisconnected,
  walletActions,
  walletSettingClicked,
  closeWalletSetting,
} = navbarSlice.actions;

export default navbarSlice.reducer;
