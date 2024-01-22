import styles from './Header.module.css'
// import todoLogo from '../../public/todo-logo.svg'
import todoLogo from '/todo-logo.svg'

export function Header () {

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="TODO" />
        </header>
    )
}