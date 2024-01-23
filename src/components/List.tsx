import { Empty } from './Empty'
import styles from './List.module.css'
import { Task } from './Task'

export function List () {
    return (
        <div className={styles.list}>
            <header>
                <aside>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </aside>

                <aside>
                    <p>Concluídas</p>
                    <span>0 de 4</span>
                </aside>
            </header>
            
            <div>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>

            <Empty />

        </div>
    ) 
}