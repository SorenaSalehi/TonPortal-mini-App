import React, { lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { authenticateUser } from "./services/apiTel";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NotMobileUser from "./pages/NotMobileUser";
import AppLayout from "./pages/AppLayout";
import Suspense from "./ui/Suspense";
import WalletNotConnectedPage from "./pages/WalletNotConnected";
import { userAuthenticated } from "./features/userSlice";
import SwapPage from "./pages/SwapPage";
const Home = lazy(() => import("./pages/Home"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export const webapp = window.Telegram.WebApp;
export default function App() {
  //telegram auth
  const { userId } = useSelector((store) => store.user);
  const { isWalletConnected } = useSelector((store) => store.navbar);

  const dispatch = useDispatch();

  //*authentication
  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    async function initializeAuth() {
      try {
        const data = await authenticateUser(webapp, "start");

        dispatch(userAuthenticated(data?.data?.id));
      } catch (error) {
        console.error(error.message);
      }
    }

    initializeAuth();
  }, []);

  const userUsingMobile = true;
  const router = createBrowserRouter([
    {
      //*if user are mobile user then display page
      element: userUsingMobile ? <AppLayout /> : <NotMobileUser />,
      children: [
        {
          path: "/",
          element: isWalletConnected ? <Home /> : <WalletNotConnectedPage />,
        },
        {
          path: "/groups",
          element: <GroupsPage />,
        },
        {
          path: "/swap",
          element: <SwapPage />,
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
    <React.Suspense fallback={<Suspense />}>
      <TonConnectUIProvider manifestUrl="https://tonportal.pro/tonconnect-manifest.json">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider
            router={router}
            future={{
              v7_skipActionErrorRevalidation: true,
            }}
          />
        </QueryClientProvider>
      </TonConnectUIProvider>
    </React.Suspense>
  );
}
