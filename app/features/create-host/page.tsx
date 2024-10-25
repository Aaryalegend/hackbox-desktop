// pages/features/create-host/page.tsx
'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';

const CreateHost: NextPage = () => {
  const [hackathonDetails, setHackathonDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHackathonDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { title, description, date, time, location } = hackathonDetails;
    
    try {
      const response = await fetch('/api/hackathons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          date: `${date}T${time}`, // Combine date and time
          location,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        console.log('Hackathon created successfully');
        // Reset form after submission
        setHackathonDetails({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
        });
      } else {
        const { error } = await response.json();
        setError(error || 'Failed to create hackathon');
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-4xl font-bold text-white-800">Create & Host Hackathons</h1>
          <p className="mt-4 text-lg text-gray-600">
            HackBox provides an intuitive interface to create and manage hackathons effortlessly. Whether you're organizing an intracollege event or an intercollege competition, our platform offers all the tools you need to ensure a successful event.
          </p>

          {/* Form for creating a hackathon */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label htmlFor="title" className="block text-white-700">Hackathon Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={hackathonDetails.title}
                onChange={handleChange}
                className="mt-1 p-2 border text-black border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-white-700">Description</label>
              <textarea
                name="description"
                id="description"
                value={hackathonDetails.description}
                onChange={handleChange}
                className="mt-1 p-2 border text-black border-gray-300 rounded w-full"
                rows={4}
                required
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label htmlFor="date" className="block text-white-700">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={hackathonDetails.date}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="time" className="block text-white-700">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={hackathonDetails.time}
                  onChange={handleChange}
                  className="mt-1 p-2 border text-black border-gray-300 rounded w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-white-700">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={hackathonDetails.location}
                onChange={handleChange}
                className="mt-1 p-2 border text-black border-gray-300 rounded w-full"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" disabled={loading}>
              {loading ? 'Submitting...' : 'Host Hackathon'}
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {success && <p className="mt-4 text-green-500">Hackathon created successfully!</p>}
          </form>
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

export default CreateHost;
