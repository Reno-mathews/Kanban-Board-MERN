import { useState } from "react";

export function useKanbanBoard() {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: "To Do",
            tasks: [
                { id: 1, title: "Study React" },
                { id: 2, title: "Study Express" },
            ],
        },
        {
            id: 2,
            title: "In Progress",
            tasks: [{ id: 3, title: "Build Kanban UI" }],
        },
        {
            id: 3,
            title: "In Progress",
            tasks: [{ id: 4, title: "Setup project "}],
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [selectedColumnId, setSelectedColumnId] = useState(1);

    const [isEditModalOpen, setIsEditModalOpen] = useState(null);
    const [taskBeingEdited, setTaskBeingEdited] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    
}