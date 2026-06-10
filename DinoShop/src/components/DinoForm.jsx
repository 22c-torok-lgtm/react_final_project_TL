import { useRef } from "react";
import Card from "../wrappers/Card";
import styles from "./DinoForm.module.css";
import Swal from "sweetalert2";

const DinoForm = ({ sendDataToApp }) => {
  const DinoNameRef = useRef();
  const URLRef = useRef();
  const DinoPriceRef = useRef();
  const DinoStockRef = useRef();
  const notesRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = DinoNameRef.current.value.trim();
    const img_url = URLRef.current.value.trim();
    const price = DinoPriceRef.current.value;
    const stock = DinoStockRef.current.value;
    const description = notesRef.current.value.trim();

    if (!name || !img_url || !price || !stock) {
      Swal.fire({
        icon: "error",
        title: "Hiba",
        text: "Kérem töltse ki a kötelező mezőket!",
      });
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Nincs bejelentkezve",
        text: "Először jelentkezzen be!",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          name,
          img_url,
          price: Number(price),
          stock: Number(stock),
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: `Hiba (${response.status})`,
          text: data.message || "A mentés nem sikerült.",
        });

        console.error("Backend error:", data);
        return;
      }

      sendDataToApp(data);

      Swal.fire({
        icon: "success",
        title: "Siker",
        text: "A dinoszaurusz mentése sikeres!",
      });

      DinoNameRef.current.value = "";
      URLRef.current.value = "";
      DinoPriceRef.current.value = "";
      DinoStockRef.current.value = "";
      notesRef.current.value = "";
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Szerver hiba",
        text: "Nem sikerült kapcsolódni a szerverhez.",
      });
    }
  };

  return (
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
              ref={DinoNameRef}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="imageURL">
              Dinoszaurusz IMG URL-je
            </label>
            <input
              className={styles.input}
              type="text"
              id="imageURL"
              ref={URLRef}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="price" >
              Dinoszaurusz Ára
            </label>
            <input
            placeholder="Millió"
              className={styles.input}
              type="number"
              id="price"
              step="0.01"
              ref={DinoPriceRef}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="notes">
              Részletek
            </label>
            <textarea
              className={styles.textarea}
              id="notes"
              ref={notesRef}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="stock">
              Raktáron lévő mennyiség
            </label>
            <input
              className={styles.input}
              type="number"
              id="stock"
              step="1"
              ref={DinoStockRef}
            />
          </div>

          <button className={styles.button} type="submit">
            Küldés
          </button>
        </form>
      </div>
    </Card>
  );
};

export default DinoForm;