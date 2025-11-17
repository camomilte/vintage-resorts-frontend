import { RegisterForm } from '../features/authentication/components/RegisterForm'

function Register() {
  return (
    <div className='px-4 mt-10 lg:px-24'>
      <div>
        <h1>Create an account!</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
