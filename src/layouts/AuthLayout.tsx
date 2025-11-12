import { Outlet } from "react-router"
import { CompactNav } from "../components/CompactNav"
import Footer from "../components/Footer"

export const AuthLayout = () => {
  return (
    <>
      <CompactNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}