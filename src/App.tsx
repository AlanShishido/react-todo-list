import './global.css'

import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />

      <div>
        <form >
          <textarea name="todo" placeholder='Adicione uma nova tarefa'/>
          <button>
            Criar
            <img src="" alt="+" />
          </button>
        </form>
      </div>

      <div>
        <section>
          <span>Tarefas criadas 4</span>
          <span>Conluídas 2 de 4</span>
        </section>

        <li>

        </li>

        
      </div>
    </>
  )
}
