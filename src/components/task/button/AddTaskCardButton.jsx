import React from 'react'
import { v4 as uuid } from 'uuid';

const AddTaskCardButton = ({taskCardsList, setTaskCardsList}) => {
  const taskCardId = uuid()

  const addTaskCard = () => {
    setTaskCardsList([...taskCardsList, {
      id: taskCardId,
      draggableId: `item${taskCardId}`,
    }])
  }

  return (
    <div className="addTaskCardButtonArea">
      <button
        className="addTaskCardButton"
        onClick={addTaskCard}
      >
        +
      </button>
    </div>
  )
}

export default AddTaskCardButton
