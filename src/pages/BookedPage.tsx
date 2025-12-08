import { useNavigate } from "react-router";

function BookedPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen max-w-xl mx-auto flex flex-col items-center justify-center px-4 gap-4">
        <h1 className="text-6xl font-accent text-brand text-center">Thank you for your reservation</h1>
        <p>You will be updated when reservation is accepted by the host</p>
        <button onClick={() => navigate("/")} className="btn-lg btn-primary">Go back to home page</button>
      </div>
    </>
  )
}

export default BookedPage;