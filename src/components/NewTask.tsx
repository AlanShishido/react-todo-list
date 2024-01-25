import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { ChangeEvent, useState } from 'react'
import { TaskData } from '../App'

interface NewTaskProps {
    taskList: TaskData[]
    setTaskList: React.Dispatch<React.SetStateAction<TaskData[]>>
}

export function NewTask ( { taskList, setTaskList} : NewTaskProps) {
    const [newTaskInput, setNewTaskInput] = useState<string>('')

    function handleInputValue (event: ChangeEvent<HTMLInputElement>) {
        setNewTaskInput(event.target.value)
    }

    function handleAddTask() {
        if (!newTaskInput) {
            return
        }
        const newTask: TaskData = {
            id: new Date().getTime(),
            text: newTaskInput,
            isChecked: false,
        }
        
        setTaskList([...taskList, newTask])
        setNewTaskInput('')
    }
    
    return (
        <div className={styles.newTask}>
            <input
                name="todo" 
                placeholder='Adicione uma nova tarefa'
                onChange={handleInputValue}
                value={newTaskInput}
            />
            <button onClick={handleAddTask}>
                Criar
                <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </button>
        </div>
    )
}