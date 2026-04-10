import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home2Layout from "@/layouts/Home2Layout";
import Home from "@/pages/HomePage/Home";
import Home2 from "@/pages/HomePage2/Home2";

/**
 * Centeralized routing configuration.
 * All base routes and their layouts are defined here.
 */
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
