const TasksOperations = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 bg-white rounded-md p-4">
                <button className="hover:text-blue-600">Todos</button>
                <button className="hover:text-blue-600">Activas</button>
                <button className="hover:text-blue-600">Completadas</button>
            </div>
        </section>
    );
}

export default TasksOperations;
