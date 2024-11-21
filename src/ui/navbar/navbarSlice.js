import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  isWalletModalOpen: false,
  isWalletConnected: false,
  walletAddress: "",
  isWalletSettingOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    walletModal(state) {
      state.isWalletModalOpen = state.isWalletModalOpen ? false : true;
    },

    walletConnected(state, action) {
      state.userAddress = action.payload;
      state.isWalletConnected = true;
    },
    walletDisconnected(state) {
      state.userAddress = "";
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
  walletModal,
  walletSettingClicked,
  closeWalletSetting,
} = navbarSlice.actions;

export default navbarSlice.reducer;
