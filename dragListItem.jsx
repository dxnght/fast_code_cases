import { useState, useEffect, useRef } from 'react'
import { Task } from './Task/Task'

import s from './taskArea.module.css'


// sort by expire date + priority
export const sortByExpAndPr = tasks => {
  let sortedTasks
  if (tasks !== undefined) {
    sortedTasks = tasks.sort((x, y) => x.expire - y.expire)
  }
  return sortedTasks
}


export const TaskArea = ({tasks, ...props}) => {


  const [draggedTask, setDraggedTask] = useState(sortByExpAndPr(tasks))
  

  const dragItem = useRef('')
  
  useEffect(() => {
    setDraggedTask(tasks)
  }, [tasks])



  const onDragStart = (e, index) => {
    e.draggedItem = draggedTask[index]
    dragItem.current = draggedTask[index]
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData("text/plain", index);
  };

  const onDragOver = (e, index) => {
    const draggedOverItem = draggedTask[index]

    if (dragItem.current === draggedOverItem) {
      return;
    }

    let items = draggedTask.filter(item => item !== dragItem.current)
    items.splice(index, 0, dragItem.current)

    setDraggedTask([...items])
  }

  const onDragEnd = e => e.draggedIndex = null



  return (
    <>
    <ul>
      { draggedTask !== undefined && draggedTask !== '' ? 
        draggedTask.map((t, idx) => <li key={t.id} className={s.drag} 
          draggable
          onDragStart={e => onDragStart(e, idx)}
          onDragOver={e => onDragOver(e, idx)}
          onDragEnd={onDragEnd}
          >
            <Task title={t.task} priority={t.priority} date={t.date} expire={t.expire} /> 
          </li>
        ) 
      : 
        null 
      }
    </ul>
    </>
  )
}
