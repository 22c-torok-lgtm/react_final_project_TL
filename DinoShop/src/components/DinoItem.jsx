import Card from "../wrappers/Card";
import styles from "./DinoItem.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";

const DinoItem = ({ dino, deleteDino }) => {
  const { isLogged } = useAuth();

  return (
    <Card>
      <div className={styles.container}>
        <h3 className={styles.destination}>{dino.name || dino.destination || "Ismeretlen dino"}</h3>

        <p className={styles.img_url}>{dino.img_url || "Nincs kép"}</p>
        <p className={styles.infoRow}>
          Ár: {dino.price ?? "-"} Mill
        </p>
      </div>
      {isLogged && deleteDino && (
        <button onClick={() => deleteDino(dino.id)}>Törlés</button>
      )}
      <NavLink to={`/details/${dino.id}`}>
        <button>Részletek</button>
      </NavLink>
    </Card>
  );
};

export default DinoItem;