// src/clerk/authGuard.jsx
import { useUser } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Loading state

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default AuthGuard;
