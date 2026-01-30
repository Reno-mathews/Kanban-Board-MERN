import { useState } from "react";
import Column from "./Column";
import SearchBar from "./SearchBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import { useKanbanBoard } from "../hooks/useKanbanBoard";

function Board() {
  const {
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
    lastDeletedTask
  } = useKanbanBoard();
  

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

      {lastDeletedTask && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 px-4 py-2 rounded flex gap-4 items-center shadow-lg">
          <span>Task deleted</span>
          <button
            onClick={undoDelete}
            className="text-blue-400 hover:underline"
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}

export default Board;