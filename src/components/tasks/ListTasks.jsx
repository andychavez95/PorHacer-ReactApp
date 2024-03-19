import ItemTask from "./ItemTask";

/*
 * Muestra la lista de tareas.
 */
const ListTasks = ({ tasks, deleteTask, completeTask }) => {
    return (
        <div className="rounded-md bg-white mt-8">
            {
                tasks.map(task => (
                    <ItemTask 
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

export default ListTasks;
