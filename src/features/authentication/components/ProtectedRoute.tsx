import type { PropsWithChildren } from "react";
import { useUser } from "../../user/hooks/useUser";
import { Navigate, useLocation } from "react-router";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const { data: user, isPending, isError } = useUser();

  if (isPending) {
    return <div>Loading...</div>
  };

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (isError) {
    return <Navigate to="/not-found" state={{ from: location }} replace />;
  }



  return children;
}