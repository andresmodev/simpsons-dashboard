import { useHamburguerMenu } from "../../../hooks/useHamburguerMenu.js";
import Button from "../../common/button/index.jsx";
import Icon from "../../common/icon/index.jsx";
import Link from "../../common/link/index.jsx";
import Logo from "../../common/logo/index.jsx";
import styles from "./style.module.css";

function Header() {
  const { isOpen, toggleMenu, closing } = useHamburguerMenu();

  return (
    <header className={styles.header}>
      <Link href="#hero">
        <Logo variant="navbar" />
      </Link>

      <nav className={styles.navbar}>
        <Button handleClick={toggleMenu} className={styles.hamburguer}>
          <Icon type="hamburguer" />
        </Button>

        <ul
          className={`${styles.navList} ${isOpen ? styles.open : ""} ${closing ? styles.close : ""}`}
        >
          <li className={`${styles.navItem} ${styles.navText}`}>
            <Link href="#about">About</Link>
          </li>
          <li className={`${styles.navItem} ${styles.navText}`}>
            <Link href="#characters">Characters</Link>
          </li>
        </ul>

        <ul className={styles.navActions}>
          <li className={`${styles.navItem} ${styles.navItemIcon}`}>
            <Link href="https://github.com/andresmodev/" newTab>
              <Icon type="github" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
