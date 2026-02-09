import { reload } from "../../utils/services.js";
import styles from "./style.module.css";

export default function ErrorMessage({ error }) {
  return (
    <div className="containerMessage">
      <div className={styles.contentMessage}>
        <p className={styles.errorMessage}>
          Algo salió mal. Por favor, inténtelo de nuevo más tarde.
        </p>
        <p className={styles.errorMessage}>{error}</p>
        <button type="button" onClick={() => reload()}>
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
