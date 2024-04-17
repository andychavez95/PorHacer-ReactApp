const TasksOperations = ({ filter, applyFilter }) => {

    const handleOnClick = (filter) => {
        applyFilter(filter)
    }

    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 bg-white rounded-md p-4">
                <button 
                    className={`
                        ${filter === "all" ? 
                                'text-blue-900' : 'text-gray-600' }
                        `} 
                    onClick={ () => { handleOnClick("all") } } 
                >
                    Todos
                </button>
                <button 
                    className={`
                        ${filter === "active" ? 
                                'text-blue-900' : 'text-gray-600' }
                        `} 
                    onClick={ () => { handleOnClick("active") } }
                >
                    Activas
                </button>
                <button 
                    className={`
                        ${filter === "completed" ? 
                                'text-blue-900' : 'text-gray-600' }
                        `} 
                    onClick={ () => { handleOnClick("completed") } }
                >
                    Completadas
                </button>
            </div>
        </section>
    );
}

export default TasksOperations;
