import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./admin/Dashboard"));
const ManageOrders = lazy(() => import("./admin/ManageOrders"));
const RequireAdmin = lazy(() => import("@/middleware/requireAdmin"));

const PublicLayout = lazy(() => import("./layouts/PublicLayout"));

const SignIn = lazy(() => import("@/clerk/SignIn"));
const SignUp = lazy(() => import("@/clerk/SignUp"));
const AuthGuard = lazy(() => import("@/clerk/AuthGaurd"));

const ManageFood = lazy(() => import("@/admin/ManageFood"));
const ManageUsers = lazy(() => import("@/admin/ManageUsers"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/signin/sso-callback"
          element={<Navigate to="/" replace />}
        />

        {/* Public Routes (Protected by Clerk) */}
        <Route
          element={
            <AuthGuard>
              <PublicLayout />
            </AuthGuard>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>


        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
          <Route
            path="orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
            <Route
            path="food"
            element={
              <RequireAdmin>
                <ManageFood />
              </RequireAdmin>
            }
          />
            <Route
            path="users"
            element={
              <RequireAdmin>
                <ManageUsers />
              </RequireAdmin>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
