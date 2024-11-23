import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/userSlice";
import navbarSlice from "./ui/navbar/navbarSlice";
import assetsSlice from "./features/assets/assetsSlice";
import groupSlice from "./features/groups/groupSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    navbar: navbarSlice,
    asset: assetsSlice,
    group: groupSlice,
  },
});

export default store;
