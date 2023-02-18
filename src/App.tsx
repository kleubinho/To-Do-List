import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import ClipBoard from "./assets/Clipboard.svg";
import { CardTask } from "./components/CardTask";
import { useState } from "react";
import { TCardsTask } from "./types/cardTask.t";
import toast, { Toaster } from 'react-hot-toast';
export function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TCardsTask[]>([]);


  function handleAddTask() {

    if(task === '') {
      return
    }

    let newTask = {
      id: uuidv4(),
      nameTask: task,
      taskDone: false,
    };

    setTasks((prevState: any) => [...prevState, newTask]);
    setTask("")

  }

  function updateTaskStatus(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.taskDone = !task.taskDone;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const taskCompleted = tasks.filter((task) => task.taskDone === true).length;

  function onDeleteTask(idTask: string) {
    // Imutabilidade -> as variáveis nÃo sofrem mutação, nós criamos um novo valor (um novo espaço na memoria)
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      console.log(task.id !== idTask);
      return task.id !== idTask; //eu quero filtrar para manter na lista apenas os comentários que forem diferentes do comentario que eu quero deletar
    });

    setTasks(tasksWithoutDeleteOne);
  }

  console.log(tasks);

  return (
    <div className={styles.app}>
      <Toaster />
      <Header />
      <div className={styles.createTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
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
            <span>
              {taskCompleted} de {tasks.length}
            </span>
            Concluídas
          </p>
        </header>

        <section className={styles.posts}>
          {tasks.length ? (
            <>
              {tasks.map((task, index) => (
                <CardTask
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  updateTaskStatus={updateTaskStatus}
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
