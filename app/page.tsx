// pages/page.tsx
"use client";
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/Navbar';
import { BackgroundBeams } from './components/ui/background-beams';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { BackgroundGradient } from './components/ui/background-gradient';
import { CardSpotlight } from './components/ui/card-spotlight';
import { PinContainer } from './components/ui/3d-pin';
import { cn } from "@/lib/utils";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="bg-darkBackground text-foreground dark:text-darkForeground">
      
      <Head>
        <title>HackBox - Host Hackathons with Ease</title>
        <meta name="description" content="HackBox - A platform to host intracollege and intercollege hackathons." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />
      
      <BackgroundBeamsWithCollision>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center py-20 space-y-8 md:space-y-0 md:space-x-8">
        {/* Upcoming Events Card */}
        <div className="hidden md:block md:w-1/3">
          <PinContainer
            title="Participate"
            href="/pages/events"
            className="w-full md:w-80"
          >
            <h3 className="text-xl font-semibold text-white-700">Upcoming Events</h3>
            <p className="mt-4 text-blue-300">Check out the latest upcoming hackathons and events.</p>
            <Link href="/pages/events" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
              View All Events
            </Link>
          </PinContainer>
        </div>

        <div className="md:w-2/3 text-center md:text-right">
          <h1 className="text-5xl font-bold text-white-800">Welcome to HackBox</h1>
          <p className="text-xl text-gray-600 mt-4">Your ultimate platform for hosting intracollege and intercollege hackathons.</p>
          <Link href="#features" className="mt-8 inline-block bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600">
            Get Started
          </Link>
        </div>
      </section>

      </BackgroundBeamsWithCollision>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800">Platform Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <CardSpotlight className="h-64 w-108" onClick={()=>{
              router.push('/features/create-host')
            }}>
              <h3 className="text-xl font-semibold text-white-700">Create & Host Hackathons</h3>
              <p className="mt-4 text-blue-300">Easily create, manage, and host hackathons at intra- and intercollege levels.</p>
            </CardSpotlight>
            {/* Feature 2 */}
            <CardSpotlight className="h-64 w-108" onClick={()=>{
              router.push('/features/team-registration')
            }}>
              <h3 className="text-xl font-semibold text-white-700">Team Registration & Management</h3>
              <p className="mt-4 text-blue-300">Create teams, join existing ones, and manage all participants effortlessly.</p>
            </CardSpotlight>
            {/* Feature 3 */}
            <CardSpotlight className="h-64 w-108" onClick={()=>{
              router.push('/features/submission-judging')
            }}>
              <h3 className="text-xl font-semibold text-white-700">Submission & Judging System</h3>
              <p className="mt-4 text-blue-300">Submit projects, and let judges evaluate and rank participants.</p>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-700 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-400">Hosting a hackathon has never been easier. Simply follow these steps:</p>
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
