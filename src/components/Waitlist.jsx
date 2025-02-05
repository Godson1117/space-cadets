import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Waitlist() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({})
  const [refferals, setRefferals] = useState(0)
  const referralLink = "https://app.spacecadets?referral=[referral_code]";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClick = () => {
    setRefferals(refferals + 1)
    sessionStorage.setItem("points", Number(sessionStorage.getItem("points")) + 30)
  }

  useEffect(() => {
    fetch('https://space-cadet.onrender.com/stats')
      .then(response => response.json())
      .then(data => {
        setStatus(data);
        // Update state with fetched data if necessary
      })
      .catch(error => console.error('Error fetching stats:', error));

    return () => {

    }
  }, [])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('/bg-2.png')] bg-black text-white px-4 sm:px-6 py-6">
        <div className="max-w-lg w-full text-center space-y-6">
          {/* Thumbs Up Image */}
          <div className="flex justify-center">
            <img src="/thumbs-up.png" alt="Thumbs Up" className="w-16 sm:w-20 h-16 sm:h-20 rotate-12" />
          </div>

          {/* Title & Description */}
          <h1 className="text-xl sm:text-2xl font-bold">
            Hold tight, You're on the waitlist!
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            You will receive an invite with a username and password soon.
          </p>

          {/* Progress Bar Section */}
          <div className="space-y-2">
            <div className="text-sm flex justify-between">
              <span className="text-blue-400">{status.percentageFilled} spots remaining</span>
              <span className="text-pink-500">{status.totalJoinees} people already on the list!</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }}></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-around text-sm sm:text-lg">
            <div>
              <p className="font-semibold">{sessionStorage.getItem("points")}</p>
              <p className="text-gray-400 text-xs sm:text-sm">Points earned</p>
            </div>
            <div>
              <p className="font-semibold">{refferals}</p>
              <p className="text-gray-400 text-xs sm:text-sm">Referrals</p>
            </div>
          </div>

          {/* Referral Section */}
          <div className="flex flex-col sm:flex-row items-center border border-gray-400/20 p-2 rounded-full bg-gray-900/50 space-y-3 sm:space-y-0 sm:space-x-3">
            {/* Earn More Points */}
            <p className="text-white text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/15 to-indigo-700/30 border border-gray-400/20">
              Earn more points
            </p>

            {/* Points per invite */}
            <p className="text-sm px-4 border-r border-gray-500/30 text-gray-300 sm:border-none sm:pr-0">
              +30 per invite
            </p>

            {/* Referral Link */}
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full text-sm flex-1 overflow-hidden">
              <span className="truncate">{referralLink}</span>
              <button
                onClick={handleCopy}
                className="ml-2 text-gray-300 hover:text-white"
              >
                <img src="/copy.png" alt="Copy" className="w-6 sm:w-8 h-5" />
              </button>
            </div>
          </div>
          {copied && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-white px-6 py-2 rounded-full shadow-lg opacity-90">
              <p className="text-sm">Copied!</p>
            </div>
          )}

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <img
              src="/facebook.png"
              alt="Facebook"
              className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:opacity-80"
              onClick={handleClick}
            />
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:opacity-80"
              onClick={handleClick}
            />
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:opacity-80"
              onClick={handleClick}
            />
            <img
              src="/x.png"
              alt="Twitter (X)"
              className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:opacity-80"
              onClick={handleClick}
            />
          </div>
          <Link className="inline-block mt-14 px-6 py-3 text-black bg-gradient-to-r from-cyan-200 to-cyan-600 hover:scale-105 duration-300 ease-in-out rounded-xl font-medium shadow-lg focus:outline-none" to="/login">
            Login Now
          </Link>
        </div>
      </div>
    </>
  );
}
