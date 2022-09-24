import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

export type CardProps = {
  task: string;
};

export const CardTask = (props: CardProps) => {
  return (
    <div className={styles.cardTask}>
      <input className={styles.checkBox} type={"checkbox"} />
      <p>{props.task}</p>
      <Trash className={styles.trash} size={32} />
    </div>
  );
};
