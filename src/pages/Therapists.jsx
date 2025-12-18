import { useTherapists } from "../hooks/useTherapists";

const Therapists = () => {
  const { therapists } = useTherapists(true);

  return (
    <div>
      <h1 className="text-2xl mb-4">Available Therapists</h1>

      {therapists.map((t) => (
        <div key={t.id} className="border p-4 rounded mb-2">
          <h2 className="font-semibold">{t.name}</h2>
          <p>Price: ${t.pricePerHour}/hour</p>
          <p>Rating: {t.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Therapists;
