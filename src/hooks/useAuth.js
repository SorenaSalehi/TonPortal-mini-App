import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { userAuthenticated } from "../features/userSlice";
import { authenticateUser } from "../services/apiTel";

export function useAuth() {
  const webapp = window.Telegram.WebApp;
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      webapp.ready();
      const data = await authenticateUser(webapp, "start");
      dispatch(userAuthenticated(data.data.id));
      return data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error("Authentication error:", error.message);
    },
  });
}
