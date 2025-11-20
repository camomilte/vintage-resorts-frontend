import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { CompactNav } from "../components/CompactNav";

export const DetailLayout = () => (
  <>
    <CompactNav />
    <main>
      <Outlet />      
    </main>
    <Footer />
  </>
)