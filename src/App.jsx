import { Fragment, useState } from "react";
import Header from "./components/Header";
import TasksForm from "./components/tasks/TasksForm.jsx";
import TasksList from "./components/tasks/TasksList.jsx";
import TasksCounter from "./components/tasks/TasksCounter.jsx";
import Footer from "./components/Footer";
import TasksOperations from "./components/tasks/TasksOperations.jsx";

const initialTask = [
    {
        id: Date.now(),
        message: "Primer tarea de ejemplo",
        completed: false
    },
    {
        id: Date.now() + 1,
        message: "Segunda tarea de ejemplo",
        completed: true
    },
    {
        id: Date.now() + 2,
        message: "Tercera tarea de ejemplo",
        completed: false
    },
    {
        id: Date.now() + 3,
        message: "Cuarta tarea de ejemplo",
        completed: true
    },
    {
        id: Date.now() + 4 ,
        message: "Quinta tarea de ejemplo",
        completed: false
    },
    {
        id: Date.now() + 5,
        message: "Sexta tarea de ejemplo",
        completed: true
    },
    {
        id: Date.now() + 6,
        message: "Septima tarea de ejemplo",
        completed: false
    }
];

const App = () => {

    const [tasks, setTasks] = useState(initialTask);
    const [filter, setFilter] = useState("all");

    const getTask = () => {
        switch (filter) {
            case "all":
                return tasks;
            case "active":
                return tasks.filter((task) => !task.completed)
            case "completed":
                return tasks.filter((task) => task.completed)
            default:
                return tasks;
        }
    }

    const applyFilter = (x) => {
        setFilter(x);
    } 

    const createTask = (message) => {
        const newTask = {
            id: Date.now(),
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

    const deleteCompletedTask = () => {
        const newArrayTaks = tasks.filter((task) => !task.completed);
        setTasks([ ...newArrayTaks ]);
    }

    // Número de tareas que están pendientes.
    const computedTasksLeft = tasks.filter((task) => !task.completed).length;

    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <Header/>
                <main className="container mx-auto px-4 mt-8">
                    { /* Registro de tareas. */ }
                    <TasksForm createTask={ createTask } />
                    {/* Lista de tareas. */}
                    <TasksList tasks={ getTask() } deleteTask={ deleteTask } completeTask={ completeTask }/>
                    {/* Contador de tareas */}
                    <TasksCounter 
                        computedTasksLeft={ computedTasksLeft }
                        deleteCompletedTask={ deleteCompletedTask }
                    />
                    {/* Operaciones con la lista de tareas. */}
                    <TasksOperations filter={ filter } applyFilter={ applyFilter } />
                </main>
                <Footer/>
            </div>
        </Fragment>
    );
}

export default App;
