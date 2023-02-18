import { Trash } from "phosphor-react";
import styles from "./styles.module.scss";



export const CardTask = ({ task, onDeleteTask, updateTaskStatus }: any) => {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleTaskCheck(){
    updateTaskStatus(task.id)
  }

  return (
    <div className={styles.cardTask}>
      <input
        checked={task.taskDone}
        className={styles.checkBox}
        type={"checkbox"}
        onChange={handleTaskCheck}
      />
      <p className={task.taskDone ? styles.taskDone : styles.nameTask}>{task.nameTask}</p>
      <Trash onClick={handleDeleteTask} className={styles.trash} size={32} />
    </div>
  );
};
