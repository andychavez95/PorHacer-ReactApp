import { Fragment } from "react";
import Header from "./components/Header";
import FormTask from "./components/tasks/FormTask";
import ListTasks from "./components/tasks/ListTasks";
import CounterTasks from "./components/tasks/CounterTasks";
import Footer from "./components/Footer";

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
                </main>
                <Footer/>
            </div>
        </Fragment>
    );
}

export default App;
