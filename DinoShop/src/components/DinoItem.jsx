import Card from "../wrappers/Card";
import styles from "./DinoItem.module.css";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";

const DinoItem = ({ dino }) => {
  return (
    <Card>
      <div className={styles.container}>
        <h3 className={styles.destination}>{dino.destination}</h3>

        <p className={styles.dates}>
          {moment(dino.start_date).format("YYYY-MM-DD")} - {moment(dino.end_date).format("YYYY-MM-DD")}
        </p>
        
      </div>
      {isLogged && <button onClick={() => handleDelete(dino.id)}>Törlés</button>}
      <NavLink to={`/details/${dino.id}`}>
        <button>Részletek</button>
      </NavLink>
    </Card>
  );
};

export default DinoItem;