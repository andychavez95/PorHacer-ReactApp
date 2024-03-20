const TasksCounter = ({ computedTasksLeft, deleteCompletedTask }) => {
    const handleOnClick = () => {
        deleteCompletedTask();
    }

    return (
        <section className="flex justify-between bg-white px-4 py-4 rounded-md">
            <span className="text-gray-600">Quedan { computedTasksLeft } tareas</span>
            <button
                className="text-gray-600"
                onClick={ handleOnClick }
            >
                Borrar completadas
            </button>
        </section>
    );
}

export default TasksCounter;
