import { useQuery } from "@tanstack/react-query";
import React, { lazy } from "react";
import { useDispatch } from "react-redux";
import { isAuthError, userAuthenticated } from "../features/userSlice";

const Assets = lazy(() => import("../features/assets/Assets"));
const AssetAnalyze = lazy(() => import("../features/assets/AssetAnalyze"));

export default function Home() {
  //telegram auth
  const webapp = window.Telegram.WebApp;

  const dispatch = useDispatch();
  webapp.ready();

  //*authentication
  const {
    data: userData,
    isLoading: authLoading,
    isError: AuthError,
  } = useQuery({
    queryKey: ["authenticateUser"],
    queryFn: () => authenticateUser(webapp, start),
  });

  if (!authLoading) {
    // if (AuthError) return dispatch(isAuthError());

    dispatch(userAuthenticated(userData.data.id));
  }

  return (
    <div className="flex flex-col gap-4">
      <AssetAnalyze />
      <Assets />
    </div>
  );
}
