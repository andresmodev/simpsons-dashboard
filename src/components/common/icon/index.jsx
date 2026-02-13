import { icons } from "../../../constants/config.js";
import styles from "./style.module.css";

function Icon({ type, className }) {
  const icon = icons[type];
  return <img src={icon} alt={`${type} icon`} className={`${styles.icon} ${className || ""}`} />;
}

export default Icon;
