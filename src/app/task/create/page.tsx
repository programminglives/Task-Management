'use client'
import {ChangeEvent, FormEvent, useState} from "react";
import {emptyTask, Task} from "@/app/task/types";
import {toast, ToastContainer} from "react-toastify";

function CreateTask() {

    const [task, setTask] = useState<Task>(emptyTask);

    const handleChangeEvent = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTask(prevState => ({
            ...prevState,
            id: Date.now() + "" + Math.trunc(Math.random() * 100),
            [event.target.name]: event.target.value
        }));
    }

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        const storageTasks = JSON.parse(localStorage.getItem("tasks") ?? '[]');
        localStorage.setItem("tasks", JSON.stringify([...storageTasks, task]));
        setTask(emptyTask)
        toast.success("You have created a new task!!!")
    }

    return (
        <>
            <ToastContainer/>
            <div className="flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter Task Information</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title</label>
                            <input
                                onChange={handleChangeEvent}
                                type="text"
                                id="title"
                                name="title"
                                value={task.title ?? ''}
                                placeholder="Need to do XYZ"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description"
                                   className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                onChange={handleChangeEvent}
                                id="description"
                                name="description"
                                value={task.description ?? ''}
                                placeholder="1234 5678 9012 3456"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="due-date" className="block text-sm font-medium text-gray-700">Due
                                Date</label>
                            <input
                                onChange={handleChangeEvent}
                                type="datetime-local"
                                id="due-date"
                                name="due_date"
                                value={task.due_date ?? ''}
                                placeholder="MM/YY"
                                className="mt-1 cursor-pointer block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="priority"
                                   className="block text-sm font-medium text-gray-700">Priority</label>
                            <select
                                onChange={handleChangeEvent}
                                className="w-full rounded-lg mt-1 p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm cursor-pointer"
                                name="priority" id="priority">
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateTask