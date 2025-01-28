import { useState } from "react";

export default function Waitlist() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://app.spacecadets?referral=[referral_code]";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-2.png')] bg-black text-white p-6">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Thumbs Up Image */}
        <div className="flex justify-center">
          <img src="/thumbs-up.png" alt="Thumbs Up" className="w-20 h-20 rotate-12" />
        </div>

        {/* Title & Description */}
        <h1 className="text-2xl font-bold">Hold tight, You're on the waitlist !</h1>
        <p className="text-gray-400 text-sm">You will receive an invite with a username and password soon</p>

        {/* Progress Bar Section */}
        <div className="space-y-2">
          <div className="text-sm flex justify-between">
            <span className="text-blue-400">25% spots remaining</span>
            <span className="text-pink-500">102 people already on the list!</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }}></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around text-lg">
          <div>
            <p className="font-semibold">330</p>
            <p className="text-gray-400 text-xs">Points earned</p>
          </div>
          <div>
            <p className="font-semibold">2</p>
            <p className="text-gray-400 text-xs">Referrals</p>
          </div>
        </div>

        {/* Referral Section */}
        <div className="flex items-center border border-gray-400/20 p-1 rounded-full bg-gray-900/50 space-x-3">
  {/* Earn More Points */}
  <p className="text-white text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/15 to-indigo-700/30 border border-gray-400/20">
    Earn more points
  </p>
  
  {/* Points per invite */}
  <p className="text-sm px-4 border-r border-gray-500/30 text-gray-300 ">+30 per invite</p>

  {/* Referral Link */}
  <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full text-sm flex-1 overflow-hidden">
    <span className="truncate">{referralLink}</span>
    <button onClick={handleCopy} className="ml-2 text-gray-300 hover:text-white">
      <img src="/copy.png" alt="Copy" className="w-8 h-5" />
    </button>
  </div>
</div>
{copied && <p className="text-green-400 text-sm mt-2 text-center">Copied!</p>}


        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <img src="/facebook.png" alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          <img src="/x.png" alt="Twitter (X)" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </div>
  );
}
