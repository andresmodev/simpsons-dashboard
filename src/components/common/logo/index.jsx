import styles from "./style.module.css";

function Logo({ variant }) {
  return (
    <div className={`${styles.logo} ${styles[variant]}`}>
      <img
        src="/public/logo-donut.svg"
        alt="Donut logo of the Simpsons Dashboard"
        className={styles.img}
      />
      <p className={styles.text}>
        Simpsons <span className={styles.textColor}>Dashboard</span>
      </p>
    </div>
  );
}

export default Logo;
