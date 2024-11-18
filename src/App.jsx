import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import Loader from "./ui/Loader";
import { isMobile } from "react-device-detect";
import NotMobileUser from "./pages/NotMobileUser";
import WalletNotConnected from "./pages/WalletNotConnected";
import AppLayout from "./pages/AppLayout";
const Home = lazy(() => import("./pages/Home"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));
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
      //*if user are mobile user then display page
      element: userUsingMobile ? (
        //*if wallet connected display appLayout
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
    <React.Suspense fallback={<Loader />}>
      <TonConnectUIProvider manifestUrl="https://portfolio-ai-tel-mini-app.netlify.app/tonconnect-manifest.json">
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
