import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletConnectLoading: false,
  isWalletModalOpen: false,
  isWalletConnected: true,
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
  },
});

export const { walletConnected, walletDisconnected, walletActions } =
  navbarSlice.actions;

export default navbarSlice.reducer;
