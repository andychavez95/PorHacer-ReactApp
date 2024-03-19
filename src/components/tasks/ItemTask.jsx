import Cross from "../icons/Cross"

/*
 * Muestra una tarea.
 * Desde este componente puedes borrar la tarea o cambiar su estado
 * a completado.
 */
const ItemTask = ({ task, deleteTask }) => {
    
    const handleOnClick = (idTask) => {
        deleteTask(idTask);
    }

    return (
        <article className="flex items-center gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">{ task.message }</p>
            <button onClick={ () => handleOnClick(task.id) } className="flex-none"><Cross/></button>
        </article>
    );
}

export default ItemTask;
