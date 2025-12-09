import { therapists } from "../types/therapists";

const Therapists = () => {
  const availableTherapists = therapists.filter(
    (therapist) => therapist.isAvailable
  );

  return (
    <div>
      <h1 className="text-2xl mb-4">Available Therapists</h1>
      <ul className="space-y-2">
        {availableTherapists.map((therapist) => (
          <li key={therapist.id} className="border p-4 rounded">
            <h2 className="font-semibold">{therapist.name}</h2>
            <p></p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Therapists;
