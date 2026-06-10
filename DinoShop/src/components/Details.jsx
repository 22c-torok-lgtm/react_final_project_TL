import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../wrappers/Card";
import styles from "./Details.module.css";

const Details = ({ dinos = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dino, setDino] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDino = async () => {
      setLoading(true);
      try {
        const requestedId = id?.toString();
        const existingDino = dinos.find((item) => item.id?.toString() === requestedId);

        if (existingDino) {
          setDino(existingDino);
          return;
        }

        const response = await fetch(`http://localhost:3000/products`);
        if (!response.ok) {
          throw new Error("A dinoszaurusz adatainak lekérése sikertelen.");
        }

        const data = await response.json();
        const foundDino = data.find((item) => item.id?.toString() === requestedId);

        if (!foundDino) {
          throw new Error("A dinoszaurusz nem található.");
        }

        setDino(foundDino);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDino();
  }, [dinos, id]);

  if (loading) {
    return <div className={styles.message}>Betöltés...</div>;
  }

  if (error) {
    return <div className={styles.message}>{error}</div>;
  }

  if (!dino) {
    return <div className={styles.message}>A dinoszaurusz nem található.</div>;
  }

  return (
    <div className={styles.page}>
      <Card>
        <div className={styles.content}>
          <h2>{dino.name || dino.destination || "Ismeretlen dino"}</h2>
          <img className={styles.image} src={dino.img_url} alt={dino.name || "Dinoszaurusz"} />
          <div className={styles.details}>
            <p><strong>Ár:</strong> {dino.price ?? "-"} Mill</p>
            {dino.type && <p><strong>Típus:</strong> {dino.type}</p>}
            {dino.description && <p><strong>Leírás:</strong> {dino.description}</p>}
            {dino.destination && <p><strong>Úti cél:</strong> {dino.destination}</p>}
          </div>
          <button className={styles.button} onClick={() => navigate(-1)}>
            Vissza
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Details;
