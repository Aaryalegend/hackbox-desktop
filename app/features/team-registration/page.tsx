// pages/features/team-registration/page.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';  // Importing Navbar component
import { AuroraBackground } from '@/app/components/ui/aurora-background';

const TeamRegistration: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Team Registration & Management - HackBox</title>
        <meta name="description" content="Manage team registrations efficiently with HackBox." />
      </Head>

      {/* Navbar */}
      <Navbar />  {/* Using Navbar component */}

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Team Registration & Management</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our platform allows participants to create teams, join existing ones, and manage team memberships with ease. Organizers can set team size limits and monitor participant activities to ensure smooth collaboration.
          </p>
          {/* Add more detailed content about team registration and management here */}
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

export default TeamRegistration;
