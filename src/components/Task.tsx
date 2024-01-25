import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskData } from '../App'

interface TaskProps {
    data: TaskData,
    toggleTaskCheck: ({id}:{id:number}) => void,
    removeTask: (id:number) => void,
}

export function Task ({ data, toggleTaskCheck, removeTask }: TaskProps) {
    const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : styles['paragraph-unchecked']

    function handleTaskToggle(){
        toggleTaskCheck({id: data.id})
    }

    function handleDeleteTask(){
        removeTask(data.id)
    }
        
    return (
        <div className={styles.task}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.isChecked}/>
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>

                    <p className={paragraphCheckedClassname}>
                        {data.text}
                    </p>
                </label>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={16} color='#808080'/>
            </button>
        </div>
    )
}