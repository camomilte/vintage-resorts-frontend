import { LoginForm } from "../features/authentication/components/LoginForm"

function Login() {

  return (
    <div className="px-4 mt-10 lg:px-24">
      <div className="md:max-w-lg md:mx-auto">
        <h1 className="font-title font-semibold text-brand text-4xl">Welcome back!</h1>
        <LoginForm />
        <div>
          <p>
            Don't have an account yet? Register&nbsp;
            <a href="/auth/register" className="underline underline-offset-3 text-brand cursor-pointer">
              here!
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
