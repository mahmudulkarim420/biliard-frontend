import { Outlet } from "react-router-dom";
import Navbar2 from "@/components/shared/Navbar2";
import Footer from "@/components/shared/Footer";

const Home2Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar2 />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home2Layout;
