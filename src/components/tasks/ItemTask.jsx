import Cross from "../icons/Cross"

const ItemTask = () => {
    return (
        <article className="flex items-center gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">aqui va una tarea</p>
            <button className="flex-none"><Cross/></button>
        </article>
    );
}

export default ItemTask;
