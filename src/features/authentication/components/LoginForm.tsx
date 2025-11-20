import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";

//TODO: add error message if email password is incorrect

export const LoginForm = () => {
  // Local state for form input fields
  const [form, setForm] = useState({ email: "", password: "" });
  // Custom mutation hook to handle login
  const { mutate: login, isPending, isError, error } = useLogin();

  const navigate = useNavigate();

  // Handle form submissions
  const handleSubmit = (e:React.FormEvent) => {
    // Prevent page from reloading on submit
    e.preventDefault();

    // Call login mutation and pass form data
    login(form, {
      // If successful
      onSuccess:(data) => {
        // Log for debugging
        console.log("User logged in", data);
        // Save token to localStorage
        localStorage.setItem("token", data.token);
        // Redirect user to homepage
        navigate("/");

      },
      // If login fails
      onError: (err) => {
        // Log error for debugging
        console.error("Login failed", err)
      }
    })
  }

  
  return (
    <form onSubmit={handleSubmit} className="py-5">
    <div className="flex flex-col mb-5">
      <label htmlFor="email" className="pb-1">Your email</label>
      <input 
        id="email"
        type="email" 
        placeholder="Enter email" 
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        disabled={isPending}
        autoComplete="???"
        className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 
      />
    </div>

    <div className="flex flex-col mb-5">
      <label htmlFor="password" className="pb-1">Your password</label>
      <input 
        id="password"
        type="password" 
        placeholder="Enter password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value})}
        disabled={isPending}
        className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700"
      />
    </div>

    <button 
      type="submit"
      disabled={isPending}
      className="btn-md btn-primary w-full"
    >
      {isPending ? "Logging in" : "Login"}
    </button>

    {isError && (
      <p>
        {(error as any)?.response?.data?.message || "Login failed"}
      </p>
    )}
  </form>
)
}