import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import NotMobileUser from "./pages/NotMobileUser";
import AppLayout from "./pages/AppLayout";
const Home = lazy(() => import("./pages/Home"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import WalletNotConnectedPage from "./pages/WalletNotConnected";
import Suspense from "./ui/Suspense";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  const webapp = window.Telegram.Webapp;
  webapp.ready();

  console.log(webapp.initData);

  console.log(webapp.initData);

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
      <TonConnectUIProvider manifestUrl="https://portal-mini-app.netlify.app/tonconnect-manifest.json">
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
