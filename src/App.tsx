import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import ClipBoard from "./assets/Clipboard.svg";
import { CardProps, CardTask } from "./components/CardTask";
import { useState } from "react";

export function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<CardProps[]>([]);

  let newTask = {
    id: uuidv4(),
    nameTask: task,
    taskDone: false,
  };

  function handleAddTask() {
    setTasks((prevState: any) => [...prevState, newTask]);
  }
  

  function onDeleteTask(taskToDelete: string) {
    // Imutabilidade -> as variáveis nÃo sofrem mutação, nós criamos um novo valor (um novo espaço na memoria)
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      console.log(task.nameTask !== taskToDelete);
      return task.nameTask !== taskToDelete; //eu quero filtrar para manter na lista apenas os comentários que forem diferentes do comentario que eu quero deletar
    });

    setTasks(tasksWithoutDeleteOne);
  }

  console.log(tasks);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.createTask}>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button onClick={handleAddTask}>
          Criar
          <PlusCircle size={18} className={styles.icon} />
        </button>
      </div>

      <div className={styles.tasks}>
        <header>
          <p>
            Tarefas criadas
            <span>{tasks.length}</span>
          </p>

          <p>
            <span>0 de {tasks.length}</span>
            Concluídas
          </p>
        </header>

        <section className={styles.posts}>
          {tasks.length ? (
            <>
              {tasks.map((task: CardProps, index) => (
                <CardTask
                  task={task}
                  key={index}
                  nameTask={task.nameTask}
                  onDeleteTask={onDeleteTask}
                  tasks={tasks}
                />
              ))}
            </>
          ) : (
            <div className={styles.noContent}>
              <img src={ClipBoard} alt="" />
              <p className={styles.dontHas}>
                Você ainda não tem tarefas cadastradas
                <span>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
