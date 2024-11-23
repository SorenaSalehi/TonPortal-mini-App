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
const Home = lazy(() => import("./pages/Home"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  //telegram auth
  const webapp = window.Telegram.WebApp;
  webapp.ready();

  const { userId } = useSelector((store) => store.user);
  const { isWalletConnected } = useSelector((store) => store.navbar);

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
      <QueryClientProvider client={queryClient}>
        <TonConnectUIProvider manifestUrl="https://portal-mini-app.netlify.app/tonconnect-manifest.json">
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider
            router={router}
            future={{
              v7_skipActionErrorRevalidation: true,
            }}
          />
        </TonConnectUIProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
}
