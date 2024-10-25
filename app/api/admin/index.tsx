// pages/admin/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const router = useRouter();
  const userEmail = 'user@example.com'; // Replace with actual logic to get logged-in user email

  useEffect(() => {
    const adminEmails = ['admin@example.com']; // Replace with your admin emails
    if (!adminEmails.includes(userEmail)) {
      router.push('/'); // Redirect if not an admin
    }
  }, [userEmail, router]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Add more components for hackathons and participants */}
    </div>
  );
};

export default AdminDashboard;
