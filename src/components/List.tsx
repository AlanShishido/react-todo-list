import { Empty } from './Empty'
import styles from './List.module.css'
import { Task } from './Task'

interface ListProps {
    id: number,
    text: string,
    isChecked: boolean
}

export function List(tasks: ListProps[]) {
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
                {tasks.map((task) => {
                    return (
                        <Task isChecked={task.isChecked} text={task.text} />
                    )
                })}
                <Task text="tarefa 1" isChecked/>
                <Task text="tarefa 2"/>
                <Task text="tarefa 3"/>
                <Task text="tarefa 4"/>
                <Task text="tarefa 5"/>
            </div>

            <Empty />

        </div>
    ) 
}