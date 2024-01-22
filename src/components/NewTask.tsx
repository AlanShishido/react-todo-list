import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask () {
    return (
        <div className={styles.newTask}>
            <input name="todo" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </button>
        </div>
    )
}