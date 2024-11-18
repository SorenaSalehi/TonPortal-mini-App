import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  walletConnectLoading: false,
  isWalletModalOpen: false,
  isWalletConnected: false,
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
      state.userAddress = null;
      state.isWalletConnected = false;
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("ton-connect")) {
          localStorage.removeItem(key);
        }
      });
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
