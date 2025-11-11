/* import { lazy } from "react"; */
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage";
import ListingDetail from "../pages/DetailPage";
import { DetailLayout } from "../layouts/DetailLayout";
import "react-day-picker/style.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ]
  },
  {
    element: <DetailLayout />,
    children: [
      { path: "listings/:listing_id", element: <ListingDetail /> }
    ]
  }

])
