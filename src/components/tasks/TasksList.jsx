import TasksItem from "./TasksItem.jsx";

/*
 * Muestra la lista de tareas.
 */
const TasksList = ({ tasks, deleteTask, completeTask }) => {
    return (
        <div className="rounded-md bg-white mt-8">
            {
                tasks.map(task => (
                    <TasksItem
                        task={ task } 
                        key={ task.id } 
                        deleteTask={ deleteTask } 
                        completeTask={ completeTask }
                    />
                ))
            }
        </div>
    );
}

export default TasksList;
