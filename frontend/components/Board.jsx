import { useState } from "react";
import Column from "./Column";

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

    return (
        <div className="flex gap-6 p-6 overflow-x-auto">
            {columns.map((column) => (

                <Column key={column.id} column={column} />
            ))}
        </div>
    );
}

export default Board;