import { Outlet } from "react-router-dom";
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
