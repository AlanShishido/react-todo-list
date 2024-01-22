import styles from './Empty.module.css'
import emptyImg from '/todo-empty.svg'

export function Empty () {
    return (
        <div className={styles.empty}>
            <img src={emptyImg} alt="" />
        </div>
    )
}