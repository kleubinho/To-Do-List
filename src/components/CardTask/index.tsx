import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.scss";

export type CardProps = {
  nameTask: string;
  onDeleteTask: (nameTask: string) => void;
  tasks: CardProps[];
  task: any;
};

export const CardTask = ({ nameTask, onDeleteTask, tasks, task }: CardProps) => {
  function handleDeleteTask() {
    onDeleteTask(nameTask);
    console.log(typeof nameTask);
  }

  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked, task.nameTask)

  return (
    <div className={styles.cardTask}>
      <input
        checked={isChecked}
        className={styles.checkBox}
        type={"checkbox"}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p className={styles.nameTask}>{nameTask}</p>
      <Trash onClick={handleDeleteTask} className={styles.trash} size={32} />
    </div>
  );
};
