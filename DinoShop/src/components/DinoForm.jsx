import { useRef } from "react";
import Card from "../wrappers/Card";
import styles from "./DinoForm.module.css"

    const DinoForm = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      summarizeTravelData();
    };

    const summarizeTravelData = () => {
      const Dinosaur = DinosaurRef.current.value;
      const startDate = startDateRef.current.value;
      const endDate = endDateRef.current.value;
      const wayOfTravel = wayOfTravelState;
      const notes = notesRef.current.value;

      if (!Dinosaur || !startDate || !endDate || !wayOfTravel) {
        Swal.fire({
          icon: "error",
          title: "Hiba",
          text: "Kérem töltse ki a kötelező mezőket!",
        });
        return;
      }
    }
    return(
        <Card>
            <div className={styles.container}>
              <h2 className={styles.title}>Dino felvétel</h2>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="Dinosaur">
                    Dinoszaurusz neve
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="Dinosaur"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="species">
                    Dinoszaurusz Fajtája
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="species"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="weight">
                    Súly
                  </label>
                  <label className={styles.label}> <input className={styles.nextto} type="text" id="weight"/> KG</label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="hight">
                    Magasság
                  </label>
                  <label className={styles.label}> <input className={styles.input} type="text" id="hight"/> M</label>

                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="lenght">
                    Hossz
                  </label>
                  <label className={styles.label}> <input className={styles.input} type="text" id="lenght"/> M</label>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="notes">
                    Megjegyzések
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="notes"
                  ></textarea>
                </div>

                <button className={styles.button} type="submit">
                  Küldés
                </button>
              </form>
            </div>
        </Card>
    )
}

export default DinoForm;