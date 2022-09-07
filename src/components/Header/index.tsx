import logo from "../../assets/rocket.svg";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="LogoTipo" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
};
