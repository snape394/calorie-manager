import React from "react";
import AddTask from "../AddTask";
import Tasks from "../Tasks";


const HomeComponent = ({showAddTask,task,tasks,addTask, deleteTask, editStart, editTask, toggleReminder}) =>{
    return (
        <>
            {showAddTask && <AddTask onAdd={addTask} onEdit={editTask} task={task} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    onEdit = {editStart}
                />
            ) : (
                'No Meals To Show'
            )}
        </>
    )
}

export default HomeComponent