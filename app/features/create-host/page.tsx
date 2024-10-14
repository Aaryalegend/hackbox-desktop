// pages/features/create-host/page.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const CreateHost: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create & Host Hackathons - HackBox</title>
        <meta name="description" content="Learn how to create and host hackathons using HackBox." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Create & Host Hackathons</h1>
          <p className="mt-4 text-lg text-gray-600">
            HackBox provides an intuitive interface to create and manage hackathons effortlessly. Whether you're organizing an intracollege event or an intercollege competition, our platform offers all the tools you need to ensure a successful event.
          </p>
          {/* Add more detailed content about creating and hosting hackathons here */}
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
}

export default CreateHost;
