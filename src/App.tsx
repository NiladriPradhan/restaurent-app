import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderOnline = lazy(() => import("./pages/OrderOnline"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));

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

const NetworkStatusWarning = lazy(() => import("@/components/NetworkStatusWarning"));
const BookingDetailsPage = lazy(()=> import("./pages/BookingDetailsPage"));
const ReservationPage = lazy(()=> import("./pages/ReservationPage"));

function App() {
  return (
    <Suspense fallback={<h1 className="text-4xl text-red-300 text-center ">Loading...</h1>}>
      <NetworkStatusWarning/>
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
           <Route path="/menu/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/reservation-details" element={<BookingDetailsPage />} />
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
        <ToastContainer position="top-right" autoClose={3000} />
    </Suspense>
  );
}

export default App;
