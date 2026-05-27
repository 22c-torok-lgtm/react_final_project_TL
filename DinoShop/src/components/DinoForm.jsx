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

                <div className={styles.smallFields}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="sex">
                      Nem
                    </label>
                    <input className={styles.nextto} type="text" id="sex"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="age">
                      Kor
                    </label>
                    <input className={styles.nextto} type="number" id="age" placeholder="év"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="ageing">
                      Élettartalma
                    </label>
                    <input className={styles.nextto} type="text" id="ageing" placeholder="év"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="food">
                      Táplálkozás
                    </label>
                    <input className={styles.nextto} type="text" id="food"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="amount">
                      Táplálék Mennyisége
                    </label>
                    <input className={styles.nextto} type="text" id="amount" placeholder="KG"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="liveplace">
                      Élőhelye
                    </label>
                    <input className={styles.nextto} type="text" id="liveplace"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="weight">
                      Súly
                    </label>
                    <input className={styles.nextto} type="text" id="weight" placeholder="KG"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="height">
                      Magasság
                    </label>
                    <input className={styles.nextto} type="text" id="height" placeholder="M"/>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="length">
                      Hossz
                    </label>
                    <input className={styles.nextto} type="text" id="length" placeholder="M"/>
                  </div>

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