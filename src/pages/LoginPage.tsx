function Login() {

  return (
    <div className="px-4 mt-10">
      <h1 className="font-title font-semibold text-brand text-4xl">Welcome back!</h1>
      <form className="py-5">
        <div className="flex flex-col mb-5">
          <label>Your email</label>
          <input type="email" placeholder="example@email.com" className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:neutral-500 placeholder:text-sm focus:ring-3 focus:ring-brand disabled:bg-br-secondary disabled:placeholder-neutral-700" />
        </div>

        <div className="flex flex-col mb-5">
          <label>Your password</label>
          <input type="password" className="bg-zinc-800 rounded-xl p-3 border border-neutral-600 placeholder:text-neutral-500 focus:ring-3 focus:ring-brand"/>
        </div>

        <button type="submit" className="btn-md btn-primary w-full">Login</button>
      </form>
    </div>
  )
}

export default Login
