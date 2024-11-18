import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
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

    walletConnected(state, action) {
      state.userAddress = action.payload;
      state.isWalletConnected = true;
    },
    walletDisconnected(state) {
      state.isWalletConnected = false;
    },
    walletSettingClicked(state) {
      state.isWalletSettingOpen = !state.isWalletSettingOpen;
    },
    closeWalletSetting(state) {
      state.isWalletSettingOpen = false;
    },
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
