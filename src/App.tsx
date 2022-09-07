import styles from "./app.module.css";
import "./global.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import ClipBoard from "./assets/Clipboard.svg";
import { CardTask } from "./components/CardTask";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.createTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
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
          {/* <img src={ClipBoard} alt="" />

          <p>
            Você ainda não tem tarefas cadastradas
            <span>
              Crie tarefas e organize seus itens a fazer
            </span>
          </p> */}

          <CardTask />
        </section>
      </div>
    </div>
  );
}
