import { Trash } from "phosphor-react";
import styles from "./styles.module.scss";

export type CardProps = {
  task?: string;
};

export const CardTask = (props: CardProps) => {
  return (
    <div className={styles.cardTask}>
      <input className={styles.checkBox} type={"checkbox"} />
      <p className={styles.nameTask}>{props.task}</p>
      <Trash className={styles.trash} size={32} />
    </div>
  );
};
