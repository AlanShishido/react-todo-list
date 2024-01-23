import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
    isChecked?: boolean
    text: string
}

export function Task ({ isChecked=false, text }: TaskProps) {
    const checkboxCheckedClassname = isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

    const paragraphCheckedClassname = isChecked
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.task}>
            <div>
                <label htmlFor="checkbox">
                    <input readOnly type="checkbox" />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        <Check size={12}/>
                    </span>

                    <p className={paragraphCheckedClassname}>
                        {text}
                    </p>
                </label>
            </div>
            <button>
                <Trash size={16} color='#808080'/>
            </button>
        </div>
    )
}