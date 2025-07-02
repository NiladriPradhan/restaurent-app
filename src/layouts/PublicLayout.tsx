// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Header from "@/components/Header";

const PublicLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default PublicLayout;
