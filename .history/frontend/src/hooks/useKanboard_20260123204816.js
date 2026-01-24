import { useState } from "react";

export function useKanbanBoard() {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: "To Do",
            tasks: [
                { id: 1, title: "Study React" },
                { id: 2, title: "Study Express" },
                
            ]
        }
    ])
}