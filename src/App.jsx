import React, { lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import GroupsPage from "./pages/GroupsPage";
import WalletNotConnected from "./pages/WalletNotConnected";
import { isMobile } from "react-device-detect";
import NotMobileUser from "./pages/NotMobileUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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
    {
      future: {
        v7_skipActionStatusRevalidation: true,
      },
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider
        router={router}
        future={{
          v7_skipActionErrorRevalidation: true,
        }}
      />
    </QueryClientProvider>
  );
}
