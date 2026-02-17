import { useCharacterContext } from "../../../context/useCharacterContext.js";
import { getPageRange } from "../../../utils/services.js";
import styles from "./style.module.css";

function CharacterPagination() {
  const { currentPage, paginationInfo, goToNext, goToPrev, goToPage } = useCharacterContext();
  const { pages, next, prev } = paginationInfo;

  const pagesArray = getPageRange(currentPage, pages);

  return (
    <div className={styles.container}>
      <button disabled={!prev} onClick={goToPrev} className={styles.btn}>
        {"<"}
      </button>
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`${styles.btn} ${page === currentPage ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}
      <button disabled={!next} onClick={goToNext} className={styles.btn}>
        {">"}
      </button>
    </div>
  );
}

export default CharacterPagination;
