import { useState } from "react";
import Column from "./Column";
import SearchBar from "./SearchBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import { useKanbanBoard } from "../hooks/useKanbanBoard";

function Board() {

  // Add task
  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
    };

    const updatedColumns = columns.map((column) => {
      if (column.id === selectedColumnId) {
        return {
          ...column,
          tasks: [...column.tasks, newTask],
        };
      }
      return column;
    });

    setColumns(updatedColumns);
    setNewTaskTitle("");
    setSelectedColumnId(1);
    setIsModalOpen(false);
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

  const handleDeleteTask = (taskid) => {
    const confirmDelete = window.confirm("Delete this task?");

    if(!confirmDelete) return;

    const updatedColumns = columns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskid),
    }));

    setColumns(updatedColumns);
  };

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

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-4"
      >
        + Add Task
      </button>

     <AddTaskModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAdd={handleAddTask}
      newTaskTitle={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      selectedColumnId={selectedColumnId}
      setSelectedColumnId={setSelectedColumnId}
      columns={columns}
    />
    
    <EditTaskModal
      isOpen={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      onSave={handleSaveEdit}
      editedTitle={editedTitle}
      setEditedTitle={setEditedTitle}
    />

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 p-6 overflow-x-auto">
          {columns.map((column) => {
            const filteredTasks = column.tasks.filter((task) =>
              task.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            );

            return (
              <Column
                key={column.id}
                column={{ ...column, tasks: filteredTasks }}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleEditClick}
              />
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}

export default Board;