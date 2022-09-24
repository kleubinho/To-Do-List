import styles from "./app.module.css";
import "./global.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import ClipBoard from "./assets/Clipboard.svg";
import { CardProps, CardTask } from "./components/CardTask";
import { useState } from "react";

export function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<CardProps[]>([]);

  function handleAddTask() {
    const newTask = {
      task: task,
    };

    setTasks((prevState: any) => [...prevState, newTask]);
  }
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.createTask}>
        
        <input onChange={(e) => setTask(e.target.value)} 
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
            <span>0</span>
          </p>

          <p>
            Concluídas
            <span>0</span>
          </p>
        </header>

        <section className={styles.posts}>
          {tasks ? (
            <>
            {tasks.map((task:any, index:any) => (
              <CardTask key={index} task={task} />
            ))}
            </>
          ) : (
            <>
              <img src={ClipBoard} alt="" />

              <p>
                Você ainda não tem tarefas cadastradas
                <span>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </>
          )}
          
        </section>
      </div>
    </div>
  );
}
