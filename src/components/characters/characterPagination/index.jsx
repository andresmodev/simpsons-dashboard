import { getPageRange } from "../../../utils/services.js";
import styles from "./style.module.css";

function CharacterPagination({ currentPage, pagesInfo, onToNext, onToPrev, onToPage }) {
  const { pages, next, prev } = pagesInfo;

  const pagesArray = getPageRange(currentPage, pages);

  return (
    <div className={styles.container}>
      <button disabled={!prev} onClick={onToPrev} className={styles.btn}>
        {"<"}
      </button>
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => onToPage(page)}
          className={`${styles.btn} ${page === currentPage ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}
      <button disabled={!next} onClick={onToNext} className={styles.btn}>
        {">"}
      </button>
    </div>
  );
}

export default CharacterPagination;
