import { useForm } from "react-hook-form"

const WaitListForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-black text-white">
                <div className="text-center mb-8">
                    <img
                        src="/rocket.png" // Replace with your actual icon path
                        alt="rocket"
                        className="mx-auto w-30 h-30 mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-2 text-cyan-200">Join The Waitlist</h1>
                    <p className="text-gray-200 font-bold">Be the first to experience Space Cadets</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center p-5 backdrop-blur-xl bg-gradient-to-r from-purple-600/15 to-indigo-700/30 rounded-xl relative mx-auto w-lg border border-gray-400/20 shadow-lg">
                        <img
                            src="/back-light.png" // Replace with your image path
                            alt="backlight"
                            className="absolute -left-65 top-30 -translate-y-1/2 w-100 h-100 pointer-events-none"
                        />
                        <img
                            src="/back-light.png" // Replace with your image path
                            alt="backlight"
                            className="absolute -right-58 -top-10 -translate-y-1/2 w-100 h-100 pointer-events-none"
                        />
                        <label className="block font-bold mb-2 text-white" htmlFor="reason">
                            Why do you want to join ?
                        </label>
                        <input
                            type="text"
                            id="reason"
                            className="w-full mt-2 p-2 pl-5 rounded-lg bg-black border border-white/20 placeholder-gray-500 focus:outline-none"
                            placeholder="Type your answer..."
                            {...register("reason", { required: true })}
                        />
                    </div>



                    <div className="flex flex-col space-y-4 text-center">
                        <div className="flex-1">
                            <input
                                type="text"
                                id="name"
                                className="w-md p-2 pl-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
                                placeholder="Name *"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="email"
                                id="email"
                                className="w-md p-2 pl-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
                                placeholder="Email *"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
                        <div className="m-10 bg-[#6b2793] p-8 rounded-xl shadow-lg ring-1 ring-[#b040f2] hover:ring-2 hover:scale-105 duration-500 ease-in-out">
                            <h3 className="font-bold m-2">What excites you about joining ?</h3>
                            <div className="space-y-3">
                                {[
                                    "Exclusive access",
                                    "Features and innovation",
                                    "Community and collaboration",
                                    "Other",
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <label className="inline-flex items-center accent-blue-400">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-indigo-500 focus:ring-indigo-500"
                                                value={item}
                                                {...register("excitement", { required: true })}
                                            />
                                            <span className="ml-2 text-sm">{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="m-10 bg-[#1b5c6b] p-8 rounded-xl shadow-lg ring-1 ring-[#2e9eb7] hover:ring-2 hover:scale-105 duration-500 ease-in-out">
                            <h3 className="font-bold mb-2">How will you use our platform ?</h3>
                            <div className="space-y-3">
                                {[
                                    "Personal use",
                                    "Professional/Work-related",
                                    "Exploring new opportunities",
                                    "Other",
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <label className="inline-flex items-center accent-blue-400">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-indigo-500 focus:ring-indigo-500"
                                                value={item}
                                                {...register("usage", { required: true })}
                                            />
                                            <span className="ml-2 text-sm">{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="m-10 bg-[#0a1746] p-8 rounded-xl shadow-lg ring-1 ring-[#1a3cb9] hover:ring-2 hover:scale-105 duration-500 ease-in-out">
                            <h3 className="font-bold mb-2">How did you hear about us ?</h3>
                            <div className="space-y-3">
                                {[
                                    "Social media",
                                    "Friend/Referral",
                                    "Blog/News article",
                                    "Other",
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <label className="inline-flex items-center accent-blue-400">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-indigo-500 focus:ring-indigo-500"
                                                value={item}
                                                {...register("source", { required: true })}
                                            />
                                            <span className="ml-2 text-sm">{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 text-black font-bold bg-gradient-to-r from-cyan-200 to-cyan-700 rounded-xl hover:scale-105 duration-300 ease-in-out"
                        >
                            Join Now
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-300 m-6">
                    Don’t miss your chance to be part of the journey !
                </p>
            </div>
        </div>
    )
}

export default WaitListForm