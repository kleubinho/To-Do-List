import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

export const CardTask = () => {
  return (
    <div className={styles.cardTask}>
        <input className={styles.checkBox} type={"checkbox"} />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash className={styles.trash} size={32} />
      </div>
  );
};
