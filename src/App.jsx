import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { QueryProvider } from "./providers/QueryProvider";
import { AuthProvider } from "./providers/AuthProvider";
import NotMobileUser from "./pages/NotMobileUser";
import AppLayout from "./pages/AppLayout";
import Suspense from "./ui/Suspense";
import WalletNotConnectedPage from "./pages/WalletNotConnected";

const Home = lazy(() => import("./pages/Home"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));

export default function App() {
  const { isWalletConnected } = useSelector((store) => store.navbar);
  const userUsingMobile = true;

  const router = createBrowserRouter([
    {
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
      <QueryProvider>
        <TonConnectUIProvider manifestUrl="https://portal-mini-app.netlify.app/tonconnect-manifest.json">
          <AuthProvider>
            <RouterProvider
              router={router}
              future={{
                v7_skipActionErrorRevalidation: true,
              }}
            />
          </AuthProvider>
        </TonConnectUIProvider>
      </QueryProvider>
    </React.Suspense>
  );
}
