// src/middleware/RequireAdmin.tsx
import { ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

interface RequireAdminProps {
  children: ReactNode;
}

export default function RequireAdmin({ children }: RequireAdminProps) {
  const { user, isLoaded } = useUser();

  // Optional: Add loading screen
  if (!isLoaded) return <div>Loading...</div>;

  const isAdmin = user?.publicMetadata?.role === "admin";

  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
