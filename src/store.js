import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./ui/navbar/navbarSlice";
import groupSlice from "./features/groups/groupSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    group: groupSlice,
  },
});

export default store;
