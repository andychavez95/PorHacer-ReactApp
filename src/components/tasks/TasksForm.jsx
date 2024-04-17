import { useState } from "react";

const TasksForm = ({ createTask }) => {

    const [message, setMessage] = useState("");

    const handleOnEnter = (event) => {
        if (message.trim()) {
            if (event.key === "Enter") createTask(message.trim());
        }
    }

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() } className="mt-8">
            <div className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                <input 
                    type="text"
                    placeholder="Crea una nueva tarea..."
                    className="w-full text-gray-600 outline-none"
                    value={ message }
                    onChange={ handleOnChange }
                    onKeyDown={ handleOnEnter }
                />
            </div>
        </form>
    );
}

export default TasksForm;
