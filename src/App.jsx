import React, { lazy, useEffect, useState } from "react";
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
  const [user, setUser] = useState(null); // State for authenticated user
  console.log(user);
  const webapp = window.Telegram.WebApp;

  const { isWalletConnected } = useSelector((store) => store.navbar);

  const userUsingMobile = true;

  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    // Extract and send `initData` to backend
    const initData = webapp.initData;

    fetch("https://e0ed-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/start", {
      method: "GET",
      headers: {
        authorization: webapp.initData,
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setUser(data.user); // Set authenticated user
        } else {
          console.error("Invalid Telegram authentication data.");
        }
      })
      .catch((err) => console.error("Error verifying Telegram auth:", err));
  }, []);

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
