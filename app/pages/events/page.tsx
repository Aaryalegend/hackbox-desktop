// pages/events.tsx
"use client";
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar'; // Adjust the import based on your folder structure
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Hackathon {
  id: number;
  title: string;
  date: string; // Use Date type if needed
  location: string;
  description: string;
}

const Events: NextPage = () => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);

  useEffect(() => {
    const fetchHackathons = async () => {
      const response = await fetch('/api/hackathons');
      console.log(response);
      const data = await response.json();
      setHackathons(data);
    };

    fetchHackathons();
  }, []);

  return (
    <div>
      <Head>
        <title>Upcoming Events - HackBox</title>
        <meta name="description" content="Explore upcoming hackathons and events on HackBox." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Upcoming Hackathons</h1>
          <p className="mt-4 text-lg">Join the best hackathons and showcase your skills!</p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Featured Events</h2>
          <p className="mt-4 text-lg text-gray-600">Don't miss out on these amazing events!</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {hackathons.map((hackathon) => (
              <div key={hackathon.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">{hackathon.title}</h3>
                <p className="mt-2 text-gray-600">Date: {new Date(hackathon.date).toLocaleDateString()}</p>
                <p className="mt-2 text-gray-600">Location: {hackathon.location}</p>
                <p className="mt-4 text-gray-500">{hackathon.description}</p>
                <Link href={`/register/${hackathon.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining sections... */}
      {/* Event Categories Section, Call to Action Section, and Footer */}
    </div>
  );
};

export default Events;
