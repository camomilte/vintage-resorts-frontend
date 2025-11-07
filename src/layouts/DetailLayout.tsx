import { Outlet } from "react-router";
import Footer from "../components/Footer";

export const DetailLayout = () => (
  <>
    <main>
      <Outlet />      
    </main>
    <Footer />
  </>
)