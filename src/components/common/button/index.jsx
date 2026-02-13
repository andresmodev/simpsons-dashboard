import styles from "./style.module.css";

function Button({ children, handleClick, className }) {
  return (
    <button type="button" onClick={handleClick} className={`${styles.button} ${className || ""}`}>
      {children}
    </button>
  );
}

export default Button;
