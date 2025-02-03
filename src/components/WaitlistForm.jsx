import { useForm } from "react-hook-form";
import BackdropLoader from "./BackdropLoader"
import { useState } from "react";

const WaitListForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      {loading && <BackdropLoader />}
      <div className="max-w-4xl w-full bg-black text-white">
        {/* Header Section */}
        <div className="text-center mb-8">
          <img
            src="/rocket.png"
            alt="rocket"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-200">
            Join The Waitlist
          </h1>
          <p className="text-gray-200 font-medium">
            Be the first to experience Space Cadets
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Reason Input */}
          <div className="p-5 backdrop-blur-xl bg-gradient-to-r from-[#6b2793]/15 via-[#1b5c6b]/30 to-[#0a1746]/15 rounded-xl relative mx-auto border border-gray-400/20 shadow-lg">
            <label
              className="block font-bold mb-2 text-white text-center"
              htmlFor="reason"
            >
              Why do you want to join ?
            </label>
            <input
              type="text"
              id="reason"
              className={`w-full mt-2 p-3 rounded-lg bg-black border ${errors.reason ? 'border-red-500' : 'border-gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Type your answer..."
              {...register("reason", { required: true })}
            />
          </div>

          {/* Name and Email Inputs */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              id="name"
              className={`w-full p-3 rounded-lg bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Name *"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              id="email"
              className={`w-full p-3 rounded-lg bg-black border border-${errors.email ? 'red-500' : 'gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Email *"
              {...register("email", { required: true })}
            />
          </div>

          {/* Multiple Choice Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "What excites you about joining?",
                options: [
                  "Exclusive access",
                  "Features and innovation",
                  "Community and collaboration",
                  "Other",
                ],
                registerName: "excitement",
              },
              {
                title: "How will you use our platform?",
                options: [
                  "Personal use",
                  "Professional/Work-related",
                  "Exploring new opportunities",
                  "Other",
                ],
                registerName: "usage",
              },
              {
                title: "How did you hear about us?",
                options: [
                  "Social media",
                  "Friend/Referral",
                  "Blog/News article",
                  "Other",
                ],
                registerName: "source",
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className={`bg-opacity-90 border border-${errors[section.registerName] ? 'red-500' : 'gray-700'} p-6 rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out`}
                style={{
                  background: idx === 0
                    ? "#6b2793"
                    : idx === 1
                      ? "#1b5c6b"
                      : "#0a1746"
                }}
              >
                <h3 className="font-bold mb-3">{section.title}</h3>
                <div className="space-y-3">
                  {section.options.map((item, index) => (
                    <label
                      key={index}
                      className="block items-center accent-blue-400"
                    >
                      <input
                        type="radio"
                        className="form-checkbox text-indigo-500 focus:ring-indigo-500 "
                        value={item}
                        {...register(section.registerName, { required: true })}
                      />
                      <span className="ml-2 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 text-black font-medium bg-gradient-to-r from-cyan-200 to-cyan-600 rounded-xl hover:scale-105 duration-300 ease-in-out"
            >
              Join Now
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <p className="text-center text-gray-300 mt-6">
          Don’t miss your chance to be part of the journey!
        </p>
      </div>
    </div>
  );
};

export default WaitListForm;
