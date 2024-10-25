'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const [hackathons, setHackathons] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const router = useRouter();

  // Fetch data for hackathons and registrations
  useEffect(() => {
    if (status === 'loading') return;

    // if (!session || session.user.role !== 'admin') {
    //   router.push('/'); // Redirect if not admin
    //   return;
    // }

    const fetchData = async () => {
      try {
        const hackathonRes = await fetch('/api/admin/hackathons');
        // const registrationRes = await fetch('/api/admin/registrations');
        const hackathonData = await hackathonRes.json();
        // const registrationData = await registrationRes.json();

        setHackathons(hackathonData);
        // setRegistrations(registrationData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [session, status, router]);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Hackathons List */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Hosted Hackathons</h2>
        <table className="table-auto w-full mb-8">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {hackathons.map((hackathon: any) => (
              <tr key={hackathon.id}>
                <td className="border px-4 py-2">{hackathon.title}</td>
                <td className="border px-4 py-2">{hackathon.description}</td>
                <td className="border px-4 py-2">{hackathon.date}</td>
                <td className="border px-4 py-2">{hackathon.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Registrations List */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Registered Participants</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Hackathon</th>
              <th className="px-4 py-2">Team</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration: any) => (
              <tr key={registration.id}>
                <td className="border px-4 py-2">{registration.participantName}</td>
                <td className="border px-4 py-2">{registration.participantEmail}</td>
                <td className="border px-4 py-2">{registration.hackathonName}</td>
                <td className="border px-4 py-2">{registration.teamName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
