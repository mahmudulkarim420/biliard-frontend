// ─── External Libraries ──────────────────────────────────────────────────────
import { createBrowserRouter } from "react-router-dom";

// ─── Local Layouts ────────────────────────────────────────────────────────────
import RootLayout from "@/layouts/RootLayout";
import Home2Layout from "@/layouts/Home2Layout";

// ─── Local Pages ──────────────────────────────────────────────────────────────
import Home from "@/pages/HomePage/Home";
import Home2 from "@/pages/HomePage2/Home2";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ServicesPage from "@/pages/ServicesPage/ServicesPage";
import ServiceDetails from "@/pages/ServicesPage/ServiceDetails";
import PortfolioPage from "@/pages/PortfolioPage/PortfolioPage";
import PortfolioDetails from "@/pages/PortfolioPage/PortfolioDetails";
import CareerPage from "@/pages/CareerPage/CareerPage";

// ─── Router Configuration ─────────────────────────────────────────────────────
// Centralized route tree. Each top-level route uses a layout component that
// wraps the matched child page with the appropriate Navbar and Footer.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/service-details",
    element: <ServiceDetails />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/portfolio/:id",
    element: <PortfolioDetails />,
  },
  {
    path: "/career",
    element: <CareerPage />,
  },
  {
    path: "/home-2",
    element: <Home2Layout />,
    children: [
      {
        index: true,
        element: <Home2 />,
      },
    ],
  },
]);
