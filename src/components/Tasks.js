import Task from './Task'
import {useState} from "react";

const Tasks = ({ tasks, onDelete, onToggle,onEdit }) => {
  let overCalorie = false
  if (tasks.length>0) {
    let totalCalories = 0
    for (let el in tasks) {
      totalCalories += parseInt(tasks[el].calorie)
    }
    if (totalCalories > 2000) {
      overCalorie = true
    }
  }
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} overCalorie={overCalorie} />
      ))}
    </>
  )
}

export default Tasks
