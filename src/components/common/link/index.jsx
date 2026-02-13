import styles from "./style.module.css";

function Link({ href, children, newTab = false, variant, auxClass }) {
  const target = newTab ? "_blank" : "_self";
  const rel = newTab ? "noopener noreferrer" : undefined;

  const className = variant ? styles[variant] : styles.link;

  return (
    <a href={href} target={target} rel={rel} className={`${className} ${auxClass || ""}`}>
      {children}
    </a>
  );
}

export default Link;
