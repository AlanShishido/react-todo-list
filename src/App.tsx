import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { List } from './components/List'
import { useState } from 'react'

export interface TaskData {
  id: number,
  text: string,
  isChecked: boolean
}

export function App() {
  const [taskList, setTaskList] = useState<TaskData[]>([])

  return (
    <main>
      <Header />

      <div className={styles.app}>
        <NewTask 
          taskList={taskList}
          setTaskList={setTaskList}
        /> 
        
        <List 
          taskList={taskList}
          setTaskList={setTaskList}  
        />      
      </div>

    </ main>
  )
}
