import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import BackdropLoader from "./BackdropLoader";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/login', data);
      console.log(response);
      // Redirect to home page after successful login
      navigate('/');
      alert('login successfull')
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false); // Hide loader after API response
    }
  };

  // const handlePasswordReset = async (data) => {
  //   setLoading(true);
  //   console.log(data);
    
  //   try {
  //     const response = await axios.get('http://localhost:4000/forgot_password');
  //     console.log(response);
  //     // Handle success response
  //     alert("Password reset email sent!");
  //   } catch (error) {
  //     console.error("Password reset failed:", error);
  //     // Handle error response
  //     alert("Password reset failed. Please try again.");
  //   } finally {
  //     setLoading(false); // Hide loader after API response
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg.png')] bg-center bg-cover px-4 sm:px-6 lg:px-8 relative">
      {loading && <BackdropLoader />} {/* Loader here */}

      <div className="max-w-md w-full bg-white/5 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg backdrop-blur-xl">
        <h1 className="text-center text-lg sm:text-xl font-medium mb-6 text-white">
          Join us today — sign into your account with your email!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`mt-1 w-full px-3 py-2 text-gray-300 bg-transparent border-b-2 border-gray-400 focus:outline-none hover:border-green-500 transition-all ${errors.username ? 'border-red-500' : ''}`}
              placeholder="username"
              {...register("username", { required: true })}
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <img
              src="/eye.png"
              alt="Eye Icon"
              className="absolute right-3 top-10 w-6 h-5 cursor-pointer"
              onClick={() => {
                const passwordInput = document.getElementById('password');
                passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
              }}
            />
            <input
              type="password"
              id="password"
              className={`mt-1 w-full px-3 py-2 text-gray-300 bg-transparent border-b-2 border-gray-400 focus:outline-none hover:border-green-500 transition-all ${errors.password ? 'border-red-500' : ''}`}
              placeholder="********"
              {...register("password", { required: true })}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-center text-gray-400 underline text-xs hover:scale-105 hover:text-green-400 duration-300"
              
            >
              Forgotten Your Password ?
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-5 w-32 py-2 px-4 font-medium rounded-xl text-black bg-gradient-to-r from-cyan-200 to-cyan-600 transition-all ease-in-out duration-300 hover:scale-105"
              disabled={loading} // Disable button when loading
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-gray-200">
        – it's quick and easy!
      </p>
    </div>
  );
};

export default Login;
