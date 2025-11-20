import { RegisterForm } from '../features/authentication/components/RegisterForm'

function Register() {
  return (
    <div className='px-4 mt-10 lg:px-24'>
      <div className='md:max-w-lg md:mx-auto'>
        <h1 className="font-title font-semibold text-brand text-4xl">Create an account!</h1>
        <div className='my-2'>
          <p>
            Already have an account? Login&nbsp;
            <a href="/auth/login" className="underline underline-offset-3 text-brand cursor-pointer">
              here!
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
