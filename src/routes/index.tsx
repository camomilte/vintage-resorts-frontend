/* import { lazy } from "react"; */
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage";
import ListingDetail from "../pages/DetailPage";
import { DetailLayout } from "../layouts/DetailBookingLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import Login from "../pages/LoginPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login />}
    ]
  },
  {
    element: <DetailLayout />,
    children: [
      { path: "listings/:listing_id", element: <ListingDetail /> },
    ]
  }

])
