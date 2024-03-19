import { Fragment, useState } from "react";
import Header from "./components/Header";
import FormTask from "./components/tasks/FormTask";
import ListTasks from "./components/tasks/ListTasks";
import CounterTasks from "./components/tasks/CounterTasks";
import Footer from "./components/Footer";

const initialTask = [
    {
        id: 1,
        message: "Primer tarea de ejemplo",
        completed: false
    },
    {
        id: 2,
        message: "Segunda tarea de ejemplo",
        completed: true
    },
    {
        id: 3,
        message: "Tercer tarea de ejemplo",
        completed: false
    }
];

const App = () => {

    const [tasks, setTasks] = useState(initialTask);

    const deleteTask = (idTask) => {
        const newArrayTaks = tasks.filter((task) => task.id !== idTask);
        setTasks([ ...newArrayTaks ]);
    }

    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <Header/>
                <main className="container mx-auto px-4 mt-8">
                    { /* Registro de tareas. */ }
                    <FormTask />
                    {/* Lista de tareas. */}
                    <ListTasks tasks={ tasks } deleteTask={ deleteTask } />
                    {/* Contador de tareas */}
                    <CounterTasks />
                    {/* Operaciones con la lista de tareas. */}
                </main>
                <Footer/>
            </div>
        </Fragment>
    );
}

export default App;
