import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import AddTaskCardButton from './button/AddTaskCardButton'
import TaskCard from './TaskCard'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: '0',
      draggableId: 'item0',
    }
  ]);

  const reorder = (taskCardsList, startIndex, rendIndex) => {
    const remove = taskCardsList.splice(startIndex, 1)
    taskCardsList.splice(rendIndex, 0, remove[0])
  }

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index)
    setTaskCardsList(taskCardsList)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="draggable"
        direction="horizona1"
      >
        {provided => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, i) => (
              <TaskCard
                key={taskCard.id}
                index={i}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}

            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
        </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
