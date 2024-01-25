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
    const checkedTasks = taskList.reduce((prevValue, currentTask) => {
        if (currentTask.isChecked) {
          return prevValue + 1
        }
    
        return prevValue
      }, 0)

    function handleToggleTask({ id }:{id: number}) {
        const updatedTasks = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: !task.isChecked }
              }
        
              return { ...task }
        })

        setTaskList(updatedTasks)
    }
    
    function handleRemoveTask(id: number) {
        const filteredTasks = taskList.filter((task) => task.id !== id)

        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
        return
        }

        setTaskList(filteredTasks)
    }

    return (
        <div className={styles.list}>
            <header>
                <aside className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <span>{totalTasks}</span>
                </aside>

                <aside className={styles.doneTasks}>
                    <p>Concluídas</p>
                    <span>{checkedTasks} de {totalTasks}</span>
                </aside>
            </header>
            
            {totalTasks > 0 ? (
                <div>
                    {taskList.map((task) => {
                        return (
                            <Task key={task.id}
                                data={task}
                                toggleTaskCheck={handleToggleTask}
                                removeTask={handleRemoveTask}
                            />
                        )
                    })}
                </div>
            ) : ( <Empty /> )}
        </div>
    ) 
}