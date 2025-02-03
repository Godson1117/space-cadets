import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import BackdropLoader from "./BackdropLoader";

const PassReset = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState("verification");
  const [loading, setLoading] = useState(false)

  const handleVerification = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("setPassword");
    }, 2000);
  };

  const handleSetPassword = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 2000);
  };

  const renderForm = () => {
    if (status === "verification") {
      return (
        <>
          <h1 className="text-center text-lg sm:text-xl font-medium mb-6 text-white">
            Time for a fresh Password!
          </h1>
          <p className="text-white text-center -mt-1.5">Enter your Email to reset it</p>
          <form onSubmit={handleSubmit(handleVerification)}>
            <div className="m-4 relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`mt-1 w-full px-3 py-2 text-gray-300 bg-transparent border-b-2 border-gray-400 focus:outline-none hover:border-green-500 transition-all ${errors.email ? 'border-red-500' : ''}`}
                placeholder="user@domain.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-32 py-2 px-4 font-medium rounded-xl text-black bg-gradient-to-r from-cyan-200 to-cyan-600 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Verify
              </button>
              <BackToLogin />
            </div>
          </form>
        </>
      );
    }

    if (status === "setPassword") {
      return (
        <>
          <h1 className="text-center text-lg sm:text-xl font-medium mb-6 text-white">
            Let's give your password a glow-up!
          </h1>
          <p className="text-white text-center">Enter your Email to reset it</p>
          <form onSubmit={handleSubmit(handleSetPassword)}>
            <div className="m-4 relative">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-400">
                New Password
              </label>
              <input
                type="text"
                id="new-password"
                className={`mt-1 w-full px-3 py-2 text-gray-300 bg-transparent border-b-2 border-gray-400 focus:outline-none hover:border-green-500 transition-all ${errors.newPassword ? 'border-red-500' : ''}`}
                placeholder="Enter your new password"
                {...register("newPassword", { required: true })}
              />
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400 mt-5">
                Confirm Password
              </label>
              <input
                type="text"
                id="confirm-password"
                className={`mt-1 w-full px-3 py-2 text-gray-300 bg-transparent border-b-2 border-gray-400 focus:outline-none hover:border-green-500 transition-all ${errors.confirmPassword ? 'border-red-500' : ''}`}
                placeholder="Confirm your new password"
                {...register("confirmPassword", { required: true })}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-32 py-2 px-4 font-medium rounded-xl text-black bg-gradient-to-r from-cyan-200 to-cyan-600 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Continue
              </button>
              <BackToLogin />
            </div>
          </form>
        </>
      );
    }

    return (
      <>
        <h1 className="text-center text-lg sm:text-xl font-medium mb-6 text-white">
          Mission accomplished!
        </h1>
        <p className="text-white text-center">Your password has been successfully reset</p>
        <p className="text-white text-center mt-1">Click below to continue your access</p>
        <div className="text-center mt-5">
          <Link
            to="/login"
            className="w-32 py-2 px-4 font-medium rounded-xl text-black bg-gradient-to-r from-cyan-200 to-cyan-600 transition-all ease-in-out duration-300 hover:scale-105"
          >
            Continue
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/reset-bg.png')] bg-center bg-cover px-4 sm:px-6 lg:px-8">
      {loading && <BackdropLoader />}
      <div className="max-w-md w-full bg-white/5 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
        <img src="/lock.png" alt="Lock Icon" className="w-15 h-15 text-center m-auto mb-3" />
        {renderForm()}
      </div>
    </div>
  );
};

const BackToLogin = () => (
  <Link
    className="block text-center m-auto mt-5 text-white font-medium hover:scale-105 duration-300"
    to="/login"
  >
    <img src="/arrow.png" alt="Back arrow icon" className="inline m-3 w-7 h-5" />
    Return to login screen
  </Link>
);

export default PassReset;
