import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/download.png')] bg-center bg-cover 
      ">
        <div className="max-w-xl w-full bg-white/10 p-8 rounded-3xl shadow-lg backdrop-blur-2xl">
          <h1 className="text-center text-md font-medium mb-6 text-white">
            Join us today — sign into the account with your email !</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 focus:outline-none border-b-2 focus:border-green-600 w-full px-3 py-2 text-gray-300"
                placeholder="username@domain"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 focus:outline-none border-b-2 focus:border-green-600 text-gray-300"
                placeholder="********"
                {...register("password", { required: true })}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-32 bg-green-500 text-white py-2 px-4 rounded-full transition-all ease-in-out hover:w-40 duration-300 hover:bg-green-600"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-gray-200">– it's quick and easy !</p>
      </div>
    </>
  );
};

export default Login;
