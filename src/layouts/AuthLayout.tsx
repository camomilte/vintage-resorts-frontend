import { Outlet } from "react-router"
import { CompactNav } from "../components/CompactNav"
import Footer from "../components/Footer"
import { StickyNav } from "../components/StickyNav"

export const AuthLayout = () => {
  return (
    <>
      <CompactNav />
      <main>
        <Outlet />
      </main>
      <StickyNav />
    </>

  )
}