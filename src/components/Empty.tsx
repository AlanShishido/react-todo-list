import styles from './Empty.module.css'
import emptyImg from '/todo-empty.svg'

export function Empty () {
    return (
        <div className={styles.empty}>
            <img src={emptyImg} alt="Ícone de Prancheta" />

            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}