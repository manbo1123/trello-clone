import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const reorder = (taskList, startIndex, rendIndex) => {
  const remove = taskList.splice(startIndex, 1)
  taskList.splice(rendIndex, 0, remove[0])
}

const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index)
    setTaskList(taskList)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskList.map((task, i) => (
                <div key={task.id}>
                  <Task
                    index={i}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
