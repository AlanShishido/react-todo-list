import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskData } from '../App'

interface TaskProps {
    data: TaskData,
    toggleTaskCheck: ({id}:{id:number}) => void,
}

export function Task ({ data, toggleTaskCheck }: TaskProps) {
    const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    function handleTaskToggle(){
        toggleTaskCheck({id: data.id})
    }

    function handleDeleteTask(){
        // Continuar daqui
    }
        
    return (
        <div className={styles.task}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.isChecked}/>
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        <Check size={12}/>
                    </span>

                    <p className={paragraphCheckedClassname}>
                        {data.id}:{data.text}
                    </p>
                </label>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={16} color='#808080'/>
            </button>
        </div>
    )
}