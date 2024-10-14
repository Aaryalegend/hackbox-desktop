import { NextPage } from 'next';
import Head from 'next/head';

const Features: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackBox - Platform Features</title>
        <meta name="description" content="HackBox features for hosting hackathons" />
      </Head>
      <h1 className="text-3xl font-bold text-center mt-10">Platform Features</h1>
      <p className="text-center mt-4 text-lg">Here are the amazing features of HackBox!</p>
      {/* Add more content here */}
    </div>
  );
};

export default Features;
