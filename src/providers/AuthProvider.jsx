import { useAuth } from "../hooks/useAuth";
import Suspense from "../ui/Suspense";

export function AuthProvider({ children }) {
  const { isLoading, error } = useAuth();

  if (isLoading) return <Suspense />;

  if (error) {
    console.error("Failed to authenticate:", error);
    // You could render an error component here
    return (
      <div className="bg-color text-4xl text-slate-200 w-dvw h-dvh text-center pt-[40%]">
        Authentication failed
      </div>
    );
  }

  return children;
}
