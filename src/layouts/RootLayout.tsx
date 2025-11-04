import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}