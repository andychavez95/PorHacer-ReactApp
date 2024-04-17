const TasksFunctions = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-8 bg-white rounded-md p-4">
                <button className="hover:text-blue-600 font-bold">Todos</button>
                <button className="hover:text-blue-600 font-bold">Activas</button>
                <button className="hover:text-blue-600 font-bold">Completadas</button>
            </div>
        </section>
    );
}

export default TasksFunctions;
