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
            title: "Done",
            tasks: [{ id: 4, title: "Setup project "}],
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [selectedColumnId, setSelectedColumnId] = useState(1);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [taskBeingEdited, setTaskBeingEdited] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [lastDeletedTask, setLastDeletedTask] = useState(null);
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
        });

        setColumns (updatedColumns);
        setNewTaskTitle("");
        setSelectedColumnId(1);
        setIsModalOpen(false)
    };

    const handleDeleteTask = (taskId) => {
        let deletedTask = null;
        let sourceColumnId = null;

        setColumns((prev) =>
        prev.map((column) => {
            const task = column.tasks.find((t) => t.id === taskId);
            if (task) {
                deletedTask = task;
                sourceColumnId=column.id;
            }

            return {
                ...column,
                tasks: column.tasks.filter((t) => t.id !== taskId),
            };
        })
    );

    setLastDeletedTask({
        task: deletedTask,
        columnId: sourceColumnId,
    });
    };

    const undoDelete = () => {
        if(!lastDeletedTask) return;

        const { task, columnId } = lastDeletedTask;

        setColumns((prev) =>
        prev.map((column) =>
            column.id === columnId
        ? {...column, tasks: [...column.tasks, task]}
    : column
)
);
setLastDeletedTask(null);
    }

  const handleEditClick = (task) => {
    setTaskBeingEdited(task);
    setEditedTitle(task.title);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!editedTitle.trim()) return;

    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.map((task) => 
      task.id === taskBeingEdited.id
    ? { ...task, title: editedTitle }
  : task
),
    }));

    setColumns(updatedColumns);
    setIsEditModalOpen(false);
    setTaskBeingEdited(null);
    setEditedTitle("");
  };

   // Drag logic
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    let movedTask = null;
    let sourceColumnId = null;
    let destinationColumnId = null;

    // Remove from source column
    const tempColumns = columns.map((column) => {
      const taskIndex = column.tasks.findIndex(
        (task) => task.id === activeId
      );

      if (taskIndex !== -1) {
        movedTask = column.tasks[taskIndex];
        sourceColumnId = column.id;
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== activeId),
        };
      }
      return column;
    });

    // Find destination column
    tempColumns.forEach((column) => {
      if (column.tasks.some((task) => task.id === overId)) {
        destinationColumnId = column.id;
      }
    });

    const targetColumnId = destinationColumnId || sourceColumnId;

    const finalColumns = tempColumns.map((column) => {
      if (column.id === targetColumnId) {
        return {
          ...column,
          tasks: [...column.tasks, movedTask],
        };
      }
      return column;
    });

    setColumns(finalColumns);
  };



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
        handleAddTask,
        handleDeleteTask,
        handleEditClick,
        handleSaveEdit,
        handleDragEnd,
        lastDeletedTask,
        undoDelete,
    };
}

