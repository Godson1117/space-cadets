import { Link } from "react-router";

const Home = () => {

    const scrollToFeatures = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold md:text-7xl">Space Cadets</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Explore the cosmos, embark on missions, and redefine your limits.
        </p>
        <Link className="mt-8 px-6 py-3 text-black bg-gradient-to-r from-cyan-200 to-cyan-600 hover:scale-105 duration-300 ease-in-out rounded-2xl font-medium shadow-lg focus:outline-none" to="/waitlist">
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800" id="features">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Join Space Cadets?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Adventure Awaits</h3>
            <p className="text-gray-300">
              Step into the unknown and experience thrilling space missions.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
            <p className="text-gray-300">
              Work with fellow cadets to solve challenges and achieve greatness.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Cutting-Edge Training</h3>
            <p className="text-gray-300">
              Get access to state-of-the-art tools and resources for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-black">
        <h2 className="text-3xl font-semibold">Ready to Join the Mission?</h2>
        <p className="mt-4 text-gray-400">
          Sign up today and take the first step toward exploring the universe.
        </p>
        <Link className="inline-block mt-14 px-6 py-3 text-black bg-gradient-to-r from-cyan-200 to-cyan-600 hover:scale-105 duration-300 ease-in-out rounded-xl font-medium shadow-lg focus:outline-none" to="/login">
          Join Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Space Cadets. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
