import styles from "./style.module.css";

export default function LoadingMessage() {
  return (
    <div className="containerMessage">
      <div className={styles.contentLoader}>
        <div className={styles.spinner}></div>
        <p className={styles.message}>Cargando datos desde la API thesimpsonsapi...</p>
      </div>
    </div>
  );
}
