// pages/page.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackBox - Host Hackathons with Ease</title>
        <meta name="description" content="HackBox - A platform to host intracollege and intercollege hackathons." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to HackBox</h1>
          <p className="text-xl text-gray-600 mt-4">Your ultimate platform for hosting intracollege and intercollege hackathons.</p>
          <Link href="#features" className="mt-8 inline-block bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800">Platform Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <Link href="/features/create-host" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700">Create & Host Hackathons</h3>
              <p className="mt-4 text-gray-600">Easily create, manage, and host hackathons at intra- and intercollege levels.</p>
            </Link>
            {/* Feature 2 */}
            <Link href="/features/team-registration" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700">Team Registration & Management</h3>
              <p className="mt-4 text-gray-600">Create teams, join existing ones, and manage all participants effortlessly.</p>
            </Link>
            {/* Feature 3 */}
            <Link href="/features/submission-judging" className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700">Submission & Judging System</h3>
              <p className="mt-4 text-gray-600">Submit projects, and let judges evaluate and rank participants.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Hosting a hackathon has never been easier. Simply follow these steps:</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Step 1</h3>
              <p className="mt-4 text-gray-600">Create an account or log in to HackBox.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Step 2</h3>
              <p className="mt-4 text-gray-600">Set up your hackathon, including rules, themes, and team requirements.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700">Step 3</h3>
              <p className="mt-4 text-gray-600">Invite participants, manage teams, and oversee the event seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} HackBox. Built by <span className="font-bold">teamwizards</span>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
