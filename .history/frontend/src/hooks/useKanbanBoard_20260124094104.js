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

    const handleAddTask = () => {
        if (!newTaskTitle.trim()) return;
    
        const newTask ={
            id:Date.now(),
            title: newTaskTitle,
        };

        const updatedColumns = columns.map((column) => {
            if (column.id === selectedColumnId) {
                return {
                    ...column,
                    tasks: [...column.tasks, newTask]
                };
            }
            return column;
        })

    return {
        columns,
        setColumns,
        searchQuery,
        setSearchQuery,
        isModalOpen,
        setIsModalOpen,
        newTaskTitle,
        setNewTaskTitle,
        selectedColumnId,
        setSelectedColumnId,
        isEditModalOpen,
        setIsEditModalOpen,
        taskBeingEdited,
        setTaskBeingEdited,
        editedTitle,
        setEditedTitle,
    };
}

