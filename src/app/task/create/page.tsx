function CreateTask() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter Task Information</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Need to do XYZ"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description"
                                   className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="1234 5678 9012 3456"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="due-date" className="block text-sm font-medium text-gray-700">Due Date</label>
                            <input
                                type="datetime-local"
                                id="due-date"
                                name="due_date"
                                placeholder="MM/YY"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                            <select
                            className="w-full rounded-lg mt-1 p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                name="priority" id="priority">
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
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