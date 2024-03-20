import IconsCross from "../icons/IconsCross.jsx"
import IconsCheck from "../icons/IconsCheck.jsx"

/*
 * Muestra una tarea.
 * Desde este componente puedes borrar la tarea o cambiar su estado
 * a completado.
 */
const TasksItem = ({ task, deleteTask, completeTask }) => {
    
    const onClickDeleteTask = (idTask) => {
        deleteTask(idTask);
    }

    const onClickCompleteTask = (idTask) => {
        completeTask(idTask);
    } 

    // Clases para cuando la tarea está completada.
    const baseClassName = "flex items-center justify-center h-5 w-5 rounded-full border-2";
    const gradientClassName = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
    const lineClassName = "line-through text-gray-400";

    return (
        <article className="flex items-center gap-4 border-b border-b-gray-400 py-4 px-4">
            <button 
                onClick={ () => onClickCompleteTask(task.id) } 
                className={
                    `${ baseClassName } ${ task.completed && gradientClassName }`
                }
            >
                <IconsCheck/>
            </button>
            <p 
                className={`grow text-gray-600 ${task.completed && lineClassName}`}
            >
                { task.message }
            </p>
            <button 
                onClick={ () => onClickDeleteTask(task.id) } 
                className="flex-none"
            >
                <IconsCross/>
            </button>
        </article>
    );
}

export default TasksItem;
