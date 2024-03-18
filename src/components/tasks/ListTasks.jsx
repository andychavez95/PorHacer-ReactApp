import Cross from "../icons/Cross"

const ListTasks = () => {
    return (
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
        </div>
    );
}

export default ListTasks;
