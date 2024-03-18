import { Fragment } from "react";
import Cross from "./components/icons/Cross";
import Moon from "./components/icons/Moon";

const App = () => {
    return (
        <Fragment>
            <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="uppercase text-white text-3xl tracking-widest font-bold">Por hacer</h1>
                        <button><Moon fill="#fff"/></button>
                    </div>
                    <form className="mt-8">
                        <div className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                            <input 
                                type="text"
                                placeholder="Crea una nueva tarea..."
                                className="w-full text-gray-600 outline-none"
                            />
                        </div>
                    </form>
                </header>
                <main className="container mx-auto px-4 mt-8">
                    <div className="rounded-md bg-white">
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
                </main>
                <section className="container mx-auto px-4 mt-8">
                    <div className="flex justify-center gap-4 bg-white rounded-md p-4">
                        <button className="hover:text-blue-600">Todos</button>
                        <button className="hover:text-blue-600">Activas</button>
                        <button className="hover:text-blue-600">Completadas</button>
                    </div>
                </section>
                <section className="container mx-auto px-4 mt-8">
                    <p className="text-center text-gray-600">Arrastra y suelta para reordenar la lista</p>
                </section>
            </div>
        </Fragment>
    );
}

export default App;
