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

        <img  className={styles.image} src={dino.img_url}/>
        <p className={styles.infoRow}>
          Ár: {dino.price ?? "-"} Mill
        </p>
      </div>
      <NavLink to={`/details/${dino.id}`}>
        <button>Részletek</button>
      </NavLink>
      {isLogged && deleteDino && (
        <button onClick={() => deleteDino(dino.id)}>Törlés</button>
      )}

    </Card>
  );
};

export default DinoItem;