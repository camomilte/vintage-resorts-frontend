import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../hooks/useRegister";
import { registerFormSchema } from "../schemas/registerFormSchema";

export const RegisterForm = () => {
  // Local state to handle form input fields
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    bio: "",
    profilePicture: "",
    birthday: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Custom mutation hook to handle registration
  const { mutate: register, isPending, isError, error } = useRegister();

  const navigate = useNavigate();

  // Handle form submissions
  const handleSubmit = (e:React.FormEvent) => {
    // Prevent page from reloading on submit
    e.preventDefault();
    // Clear any previous errors
    setErrorMessage("");

    const result = registerFormSchema.safeParse(form);

  if (!result.success) {
    const errors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      errors[field] = issue.message;
    });

    setFormErrors(errors);
    return; // stop submit
  }

    const birthdayDate = new Date(form.birthday);

    // Call register mutation and pass form data
    register({
      first_name: form.firstname,
      last_name: form.lastname,
      email: form.email,
      password: form.password,
      phone_number: form.phone,
      bio: form.bio,
      profile_picture_url: form.profilePicture,
      date_of_birth: birthdayDate
    }, {
      
      // If successfull
      onSuccess:(data) => {
        // Log for debugging
        console.log("user created", data);
        // Redirect user to login page
        navigate("/auth/login")
      },
      onError: (err) => {
        // Log error for debugging
        console.error("Registration failed", err)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="py-5 mb-20">
      <div className="flex flex-col mb-5">
        <label htmlFor="firstName" className="pb-1">First name</label>
        <input 
          id="firstName"
          type="text" 
          value={form.firstname}
          onChange={(e) => setForm({ ...form, firstname: e.target.value})}
          disabled={isPending}
          placeholder="Enter first name"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.firstname && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`} 
        />
        {formErrors.firstname && 
          <p className="text-red-500 pt-1">{formErrors.firstname}</p>
        }
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="lastName" className="pb-1">Last name</label>
        <input 
          id="lastName"
          type="text"
          value={form.lastname}
          onChange={(e) => setForm({ ...form, lastname: e.target.value})}
          disabled={isPending}
          placeholder="Enter last name"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.lastname && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}         
        />
        {formErrors.lastname && 
          <p className="text-red-500 pt-1">{formErrors.lastname}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="pb-1">Email</label>
        <input 
          id="email"
          type="email" 
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value})}
          disabled={isPending}
          placeholder="Enter email"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.email && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`} 
        />
        {formErrors.email && 
          <p className="text-red-500 pt-1">{formErrors.email}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="password" className="pb-1">Password</label>
        <input 
          type="password" 
          id="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value})}
          disabled={isPending}
          placeholder="Enter password"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.password && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}        
        />
        {formErrors.password && 
          <p className="text-red-500 pt-1">{formErrors.password}</p>
        }
      </div>
    
      <div className="flex flex-col mb-5">
        <label htmlFor="repeatPassword" className="pb-1">Repeat password</label>
        <input 
          type="password" 
          id="repeatPassword" 
          value={form.repeatPassword}
          onChange={(e) => setForm({ ...form, repeatPassword: e.target.value})}
          disabled={isPending}
          placeholder="Repeat password"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.repeatPassword && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`} 
        />
        {formErrors.repeatPassword && 
          <p className="text-red-500 pt-1">{formErrors.repeatPassword}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="phone" className="pb-1">Phone number</label>
        <input 
          id="phone"
          type="number" 
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value})}
          disabled={isPending}
          placeholder="Enter phone number"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.phone && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}         
        />
        {formErrors.phone && 
          <p className="text-red-500 pt-1">{formErrors.phone}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="dateOfBirth" className="pb-1">Date of birth</label>
        <input 
          id="dateOfBirth"
          type="date" 
          value={form.birthday}
          onChange={(e) => setForm({ ...form, birthday: e.target.value})}
          disabled={isPending}
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.birthday && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}         
        />
        {formErrors.birthday && 
          <p className="text-red-500 pt-1">{formErrors.birthday}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="profilePicture" className="pb-1">Profile picture</label>
        <input 
          id="profilePicture"
          type="text"
          value={form.profilePicture}
          onChange={(e) => setForm({ ...form, profilePicture: e.target.value})}
          disabled={isPending}
          placeholder="Enter a link"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.profilePicture && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}        
        />
        {formErrors.profilePicture && 
          <p className="text-red-500 pt-1">{formErrors.profilePicture}</p>
        }
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="bio" className="pb-1">Bio</label>
        <textarea 
          id="bio"
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value})}
          disabled={isPending}
          rows={5}
          placeholder="Describe yourself"
          className={`bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700 ${formErrors.bio && "border-red-500 placeholder:text-red-900 bg-red-800/20!"}`}         
        />
        {formErrors.bio && 
          <p className="text-red-500 pt-1">{formErrors.bio}</p>
        }
      </div>
      
      <button
        type="submit"
        disabled={isPending}
        className="btn-md btn-primary w-full"
      >
       {isPending ? "Registering..." : "Register"} 
      </button>
      
      {isError && (
        <p>{(error as any)?.response?.data?.message || "Registration failed"}</p>
      )}

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  )
}

