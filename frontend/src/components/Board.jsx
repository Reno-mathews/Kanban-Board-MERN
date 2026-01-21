import { useState } from "react";
import Column from "./Column";
import SearchBar from "./SearchBar";

function Board() {
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
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
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