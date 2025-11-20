import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StickyNav } from "../components/StickyNav";

export default function RootLayout() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyNav/>
    </>
  )
}