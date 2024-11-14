import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./ui/navbar/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
});

export default store;
