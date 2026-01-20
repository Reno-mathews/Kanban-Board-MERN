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
    }

    ])
}