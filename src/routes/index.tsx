/* import { lazy } from "react"; */
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage";
import ListingDetail from "../pages/DetailPage";
import { DetailLayout } from "../layouts/DetailBookingLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import Login from "../pages/LoginPage";
import NotFound from "../pages/NotFoundPage";
import Register from "../pages/RegisterPage";
import Reservation from "../pages/ReservationPage";


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
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> }
    ]
  },
  {
    element: <DetailLayout />,
    children: [
      { path: "listings/:listing_id", element: <ListingDetail /> },
      { path: "/listings/:listing_id/reservations/new", element: <Reservation />}
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
])
