import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';  // Updated to use Navbar component

const SubmissionJudging: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Submission & Judging System - HackBox</title>
        <meta name="description" content="Streamline project submissions and judging with HackBox." />
      </Head>

      {/* Navbar */}
      <Navbar />  {/* Replaced manual nav with Navbar component */}

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Submission & Judging System</h1>
          <p className="mt-4 text-lg text-gray-600">
            Facilitate seamless project submissions and an efficient judging process. Participants can submit their projects with ease, while judges can evaluate and rank submissions based on predefined criteria such as innovation, impact, and technical difficulty.
          </p>
          {/* Add more detailed content about submission and judging system here */}
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

export default SubmissionJudging;
