import React, { lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import GroupsPage from "./pages/GroupsPage";
import WalletNotConnected from "./pages/WalletNotConnected";
import { isMobile } from "react-device-detect";
import NotMobileUser from "./pages/NotMobileUser";

export default function App() {
  const { isWalletConnected } = useSelector((store) => store.navbar);
  const userUsingMobile = true;

  const router = createBrowserRouter([
    {
      element: userUsingMobile ? (
        isWalletConnected ? (
          <AppLayout />
        ) : (
          <WalletNotConnected />
        )
      ) : (
        <NotMobileUser />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/groups",
          element: <GroupsPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_skipActionErrorRevalidation: true,
      }}
    />
  );
}
