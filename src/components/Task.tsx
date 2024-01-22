import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task () {
    return (
        <div className={styles.task}>
            <div>
                <label htmlFor="checkbox">
                    <input readOnly type="checkbox" />

                    <p>Conteudo da tarefa a ser concluida</p>
                </label>
            </div>
            <button>
                <Trash size={16} color='#808080'/>
            </button>
        </div>
    )
}