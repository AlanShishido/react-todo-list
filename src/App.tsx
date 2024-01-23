import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { List } from './components/List'

const taskList = [
  {
    id: 1,
    text: 'tarefa 1',
    isChecked: false
  },
  {
    id: 2,
    text: 'tarefa 2',
    isChecked: true
  }
]

export function App() {
  return (
    <main>
      <Header />

      <div className={styles.app}>
        <NewTask /> 
        
        <List task={taskList}/>      
      </div>

    </ main>
  )
}
