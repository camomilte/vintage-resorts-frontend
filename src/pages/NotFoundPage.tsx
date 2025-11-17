import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

function NotFound() {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-accent text-brand">404</h1>
      <h2 className="text-3xl font-title font-semibold text-brand pb-4">This Page Not Found!</h2>
      <p className="text-center pb-1">Oopsie woopsie, an ewwow occuwed teehee</p>
      <div className="flex pb-4 text-brand gap-1">
        <FaHandPointRight className="size-8"/>
        <FaHandPointLeft className="size-8"/>
      </div>
      <a href="/" className="btn-lg btn-primary">Go to main page uwu</a>
    </div>
  )
}

export default NotFound
