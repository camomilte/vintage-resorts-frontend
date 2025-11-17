import { useState } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  // Local state to handle form input fields
  /* const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password:
  }); */

  const navigate = useNavigate();

  return (
    <form className="py-5 mb-20">
      <div className="flex flex-col mb-5">
        <label htmlFor="firstName" className="pb-1">First name</label>
        <input 
          id="firstName"
          type="text" 
          placeholder="Enter first name"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="lastName" className="pb-1">Last name</label>
        <input 
          id="lastName"
          type="text" 
          placeholder="Enter last name"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="pb-1">Email</label>
        <input 
          id="email"
          type="email" 
          placeholder="Enter email"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="password" className="pb-1">Password</label>
        <input 
          type="password" 
          id="password"
          placeholder="Enter password"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="repeatPassword" className="pb-1">Repeat password</label>
        <input 
          type="password" 
          id="repeatPassword" 
          placeholder="Repeat password"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="phone" className="pb-1">Phone number</label>
        <input 
          id="phone"
          type="number" 
          placeholder="Enter phone number"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="Year" className="pb-1">Date of birth</label>
        <input 
          id="dateOfBirth"
          type="date" 
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="profilePicture" className="pb-1">Profile picture</label>
        <input 
          id="profilePicture"
          type="text"
          placeholder="Enter a link"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="bio" className="pb-1">Bio</label>
        <textarea 
          id="bio"
          rows={5}
          placeholder="Describe yourself"
          className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" 

        />
      </div>
      
      <button
        type="submit"
        className="btn-md btn-primary w-full"
      >
       Submit 
      </button>
      
    </form>
  )
}

