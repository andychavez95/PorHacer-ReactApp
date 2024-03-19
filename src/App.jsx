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
    },
    {
        id: 4,
        message: "Cuarta tarea de ejemplo",
        completed: false
    },
    {
        id: 5,
        message: "Quinta tarea de ejemplo",
        completed: true
    },
    {
        id: 6,
        message: "Sexta tarea de ejemplo",
        completed: false
    }
];

const App = () => {

    const [tasks, setTasks] = useState(initialTask);

    const createTask = (message) => {
        const newTask = {
            id: tasks.length + 1,
            message,
            completed: false
        }
        setTasks([...tasks, newTask])
    }

    // Borra una tarea de la lista.
    const deleteTask = (idTask) => {
        const newArrayTaks = tasks.filter((task) => task.id !== idTask);
        setTasks([ ...newArrayTaks ]);
    }

    // Marcar como completada una tarea de la lista.
    const completeTask = (idTask) => {
        for (const task of tasks) {
            if (task.id === idTask) {
                task.completed = task.completed ? false : true;
                break;
            }
        }
        setTasks([ ...tasks ]);
    }

    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <Header/>
                <main className="container mx-auto px-4 mt-8">
                    { /* Registro de tareas. */ }
                    <FormTask createTask={ createTask } />
                    {/* Lista de tareas. */}
                    <ListTasks tasks={ tasks } deleteTask={ deleteTask } completeTask={ completeTask }/>
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
