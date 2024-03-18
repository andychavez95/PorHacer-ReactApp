import { Fragment } from "react";
import Header from "./components/Header";
import FormTask from "./components/tasks/FormTask";
import ListTasks from "./components/tasks/ListTasks";
import CounterTasks from "./components/tasks/CounterTasks";

const App = () => {
    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <Header/>
                <main className="container mx-auto px-4 mt-8">
                    { /* Registro de tareas. */ }
                    <FormTask />
                    {/* Lista de tareas. */}
                    <ListTasks />
                    {/* Contador de tareas */}
                    <CounterTasks />
                    {/* Operaciones con la lista de tareas. */}
                    <section className="container mx-auto mt-8">
                        <div className="flex justify-center gap-8 bg-white rounded-md p-4">
                            <button className="hover:text-blue-600 font-bold">Todos</button>
                            <button className="hover:text-blue-600 font-bold">Activas</button>
                            <button className="hover:text-blue-600 font-bold">Completadas</button>
                        </div>
                    </section>
                </main>
                <footer className="container mx-auto px-4 mt-8">
                    <p className="text-center text-gray-600">Arrastra y suelta para reordenar la lista</p>
                </footer>
            </div>
        </Fragment>
    );
}

export default App;
