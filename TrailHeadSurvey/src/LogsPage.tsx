import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

type Sighting = {
  id: number;
  animal_name: string;
  animal_count: number;
  notes: string | null;
  created_at: string;
};

function LogsPage() {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSightings() {
      const { data, error } = await supabase
        .from("sightings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
        return;
      }

      setSightings(data);
    }

    loadSightings();
  }, []);

  return (
    <div>
      <h1>Sighting Logs</h1>

      {error && <p>{error}</p>}

      {sightings.map((sighting) => (
        <article key={sighting.id}>
          <h2>
            {sighting.animal_count} {sighting.animal_name}
          </h2>
          {sighting.notes && <p>{sighting.notes}</p>}
          <small>
            {new Date(sighting.created_at).toLocaleString()}
          </small>
        </article>
      ))}
    </div>
  );
}

export default LogsPage;