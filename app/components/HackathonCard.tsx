// components/HackathonCard.tsx
interface Hackathon {
  title: string;
  description: string;
}

const HackathonCard = ({ hackathon }: { hackathon: Hackathon }) => {
    return (
      <div className="border p-4 rounded-lg">
        <h3 className="font-semibold">{hackathon.title}</h3>
        <p>{hackathon.description}</p>
        {/* Add buttons for managing the hackathon */}
      </div>
    );
  };
  