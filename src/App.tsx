import styles from "./app.module.css";
import "./global.css";

import logo from "./assets/rocket.svg";

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="LogoTipo" />
        <h1>
          to<span>do</span>
        </h1>
      </header>
      <p>opa!</p>
    </div>
  );
}
