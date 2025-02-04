import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import BackdropLoader from "./BackdropLoader";
import { useNavigate } from "react-router";

const WaitListForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [message, setMessage] = useState("");  // ✅ State for backend message
  const [points, setPoints] = useState(null);  // ✅ State for points
  const navigate = useNavigate();

  const generateRandomPoints = () => {
    return Math.floor(Math.random() * (200 - 20 + 1)) + 20;
  };

  useEffect(() => {
    const randomPoints = generateRandomPoints();
    sessionStorage.setItem("points", randomPoints);  // ✅ Store points in session storage
  }, []);

  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:4000/questions");
        if (!response.ok) throw new Error("Failed to fetch questions");

        const data = await response.json();
        console.log("Fetched Questions:", data);
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setFetchError(error.message);
      }
    };

    fetchQuestions();
  }, []);

  const onSubmit = async (data) => {
    const transformedData = {
      name: data.name,
      email: data.email,
      reasonOfJoin: data.reasonOfJoin,
      excitesOfJoin: data.First,
      platformUse: data.Second,
      infoOfPlatform: data.Third,
    };

    console.log("Submitting Transformed Data:", transformedData);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformedData),
      });

      const result = await response.json();
      console.log("Response Data:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      // ✅ Set points and message from backend response
      setMessage(result.message);
      setPoints(result.points);

      sessionStorage.setItem("points", result.points);  // ✅ Store points in session storage
      sessionStorage.setItem("message", result.message);  // ✅ Store message in session storage

      // ✅ Delay navigation to show points for a few seconds
      setTimeout(() => navigate("/confirm"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      {loading && <BackdropLoader />}
      <div className="max-w-4xl w-full bg-black text-white">
        <div className="text-center mb-8">
          <img src="/rocket.png" alt="rocket" className="mx-auto w-24 h-24 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-200">
            Join The Waitlist
          </h1>
          <p className="text-gray-200 font-medium">
            Be the first to experience Space Cadets
          </p>
        </div>

        {fetchError && (
          <p className="text-center text-red-500">Error: {fetchError}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="p-5 backdrop-blur-xl bg-gradient-to-r from-[#6b2793]/15 via-[#1b5c6b]/30 to-[#0a1746]/15 rounded-xl relative mx-auto border border-gray-400/20 shadow-lg">
            <label className="block font-bold mb-2 text-white text-center">
              Why do you want to join?
            </label>
            <input
              type="text"
              className={`w-full mt-2 p-3 rounded-lg bg-black border ${errors.reasonOfJoin ? 'border-red-500' : 'border-gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Type your answer..."
              {...register("reasonOfJoin", { required: true })}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              className={`w-full p-3 rounded-lg bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Name *"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              className={`w-full p-3 rounded-lg bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} placeholder-gray-500 focus:outline-none`}
              placeholder="Email *"
              {...register("email", { required: true })}
            />
          </div>

          {questions && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["First", "Second", "Third"].map((category, idx) => (
                questions[category] && (
                  <div
                    key={idx}
                    className={`bg-opacity-90 border border-${errors[category] ? 'red-500' : 'gray-700'} p-6 rounded-xl shadow-lg hover:scale-105 duration-300 ease-in-out`}
                    style={{
                      background: idx === 0 ? "#6b2793" : idx === 1 ? "#1b5c6b" : "#0a1746"
                    }}
                  >
                    <h3 className="font-bold mb-3">{category.replace(/^\w/, (c) => c.toUpperCase())}</h3>
                    <div className="space-y-3">
                      {questions[category].map((item) => (
                        <label key={item.key} className="block items-center accent-blue-400">
                          <input
                            type="radio"
                            className="form-checkbox text-indigo-500 focus:ring-indigo-500"
                            value={item.key}
                            {...register(category, { required: true })}
                          />
                          <span className="ml-2 text-sm">{item.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          )}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 text-black font-medium bg-gradient-to-r from-cyan-200 to-cyan-600 rounded-xl hover:scale-105 duration-300 ease-in-out"
            >
              Join Now
            </button>
          </div>
        </form>

       

        <p className="text-center text-gray-300 mt-6">
          Don’t miss your chance to be part of the journey!
        </p>
      </div>
    </div>
  );
};

export default WaitListForm;
