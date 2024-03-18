import { Fragment } from "react";
import Cross from "./components/icons/Cross";
import Header from "./components/Header";

const App = () => {
    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <Header/>
                <main className="container mx-auto px-4 mt-8">
                    { /* Registro de tareas. */ }
                    <form className>
                        <div className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                            <input 
                                type="text"
                                placeholder="Crea una nueva tarea..."
                                className="w-full text-gray-600 outline-none"
                            />
                        </div>
                    </form>
                    {/* Lista de tareas. */}
                    <div className="rounded-md bg-white mt-8">
                        <article className="flex items-center gap-4 border-b border-b-gray-400 py-4 px-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">aqui va una tarea</p>
                            <button className="flex-none"><Cross/></button>
                        </article>
                        <article className="flex items-center gap-4 border-b border-b-gray-400 py-4 px-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">aqui va una tarea</p>
                            <button className="flex-none"><Cross/></button>
                        </article>
                        <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">aqui va una tarea</p>
                            <button className="flex-none"><Cross/></button>
                        </article>
                        <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">aqui va una tarea</p>
                            <button className="flex-none"><Cross/></button>
                        </article>
                        <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">aqui va una tarea</p>
                            <button className="flex-none"><Cross/></button>
                        </article>
                        <section className="flex justify-between px-4 py-4">
                            <span className="text-gray-600">quedan x tareas</span>
                            <button className="text-gray-600">quedan x tareas</button>
                        </section>
                    </div>
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
