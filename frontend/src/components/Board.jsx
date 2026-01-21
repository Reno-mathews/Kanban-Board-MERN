import { useState } from "react";
import Column from "./Column";
import SearchBar from "./SearchBar";

function Board() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [columns, setColumns] = useState([
    {
        id: 1,
        title: "To Do",
        tasks: [ 
            { id: 1, title: "Study React"},
            { id: 2, title: "Study Express"},
        ],
    },
    {
        id : 2,
        title: "In Progress",
        tasks: [
            { id: 3, title: "Build Kanban UI" },
        ],
    },
    {
        id: 3,
        title: "Done",
        tasks: [
            {id: 4, title: "Setup project" },
        ],
    },

    ]);

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="p-6">
            {/* Search Bar */}
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Add Task Button */}
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-4"
            >
                + Add Task
            </button>

            {/* Modal */}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg w-80">
                        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

                        <input
                            type="text"
                            placeholder="Task title"
                            clasName="w-full p-2 rounded bg-gray-700 mb-4"
                        />

                        <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="px-3 py-1 bg-gray-600 rounded"
                            >
                                Cancel
                            </button>

                            <button 
                                className="px-3 py-1 bg-blue-600 rounded"
                            >
                                Add
                            </button>
                        </div>
                </div>
            </div>
            )}

            {/* Display columns */}
            <div className="flex gap-6 p-6 overflow-x-auto">
                {columns.map((column) => {
                    const filteredTasks = column.tasks.filter((task) =>
                        task.title.toLowerCase().includes(searchQuery.toLowerCase())
                );

            return (

                <Column 
                key={column.id} 
                column={{ ...column, tasks: filteredTasks}} 
                />
            );
})}
        </div>
    </div>
    );
}

export default Board;