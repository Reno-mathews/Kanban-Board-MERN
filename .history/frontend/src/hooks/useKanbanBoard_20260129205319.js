import { useState, useEffect } from "react";

export function useKanbanBoard() {
    const [columns, setColumns] = useState([
        { id: "todo", title: "To Do", tasks: [] },
        { id: "in-progress", title: "In Progress", tasks: []},
        { id: "done", title: "Done", tasks: [] },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [selectedColumnId, setSelectedColumnId] = useState("todo");

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [taskBeingEdited, setTaskBeingEdited] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [lastDeletedTask, setLastDeletedTask] = useState(null);

    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const tasks = await res.json();

        const updatedColumns = [
          { id: "todo", title: "To Do", tasks: []} ,
          { id: "in-progress", title: "In Progress", tasks: [] },
          { id: "done", title: "Done", tasks: []},
        ];

        tasks.forEach((task) => {
          const column = updatedColumns.find(
            (col) => col.id === task.column
          );
          if (column) {
            column.tasks.push({
              id: task._id,
              title: task.title,
            });
          }
        });

        setColumns(updatedColumns);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    };

    useEffect(() => {
      fetchTasks();
    }, []);

    const handleAddTask = async () => {
      if(!newTaskTitle.trim()) return;

      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: newTaskTitle,
            column: selectedColumnId,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to add task");
        }

        await fetchTasks();
        
        setNewTaskTitle("");
        setIsModalOpen(false);
      } catch (err) {
        console.error(err);
      }
    };

   const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/tasks/${taskId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }

      await fetchTasks();
    } catch (err){
      console.error(err);
    }
   }

  const handleSaveEdit = async() => {
    if (!editedTitle.trim() || !taskBeingEdited) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/tasks/${taskBeingEdited.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: editedTitle,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update task");
      }

      await fetchTasks();

      setIsEditModalOpen(false);
      setTaskBeingEdited(null);
      setEditedTitle("");
    } catch (err) {
      console.error(err);
    }
  };

   // Drag logic
  const handleDragEnd = 



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

