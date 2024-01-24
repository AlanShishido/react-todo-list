import { Empty } from './Empty'
import styles from './List.module.css'
import { Task } from './Task'
import { TaskData } from '../App'


interface ListProps {
    taskList: TaskData[],
    setTaskList: React.Dispatch<React.SetStateAction<TaskData[]>>
}

export function List({taskList, setTaskList}: ListProps){
    const totalTasks = taskList.length

    function toggleTaskCheck({ id }:{id: number}) {
        const updatedTasks = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: !task.isChecked }
              }
        
              return { ...task }
        })

        setTaskList(updatedTasks)
    }

    return (
        <div className={styles.list}>
            <header>
                <aside>
                    <p>Tarefas criadas</p>
                    <span>{totalTasks}</span>
                </aside>

                <aside>
                    <p>Concluídas</p>
                    <span>0 de {totalTasks}</span>
                </aside>
            </header>
            
            {totalTasks > 0 ? (
                <div>
                    {taskList.map((task) => {
                        return (
                            <Task key={task.id}
                                data={task}
                                toggleTaskCheck={toggleTaskCheck}
                            />
                        )
                    })}
                </div>
            ) : ( <Empty /> )}
        </div>
    ) 
}