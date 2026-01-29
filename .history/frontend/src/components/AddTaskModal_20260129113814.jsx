function AddTaskModal({
    isOpen,
    onClose,
    onAdd,
    newTaskTitle,
    setNewTaskTitle,
    selectedColumnId,
    setSelectedColumnId,
    columns,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

                <input
                    type="text"
                    placeholder="Task title..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 mb-4"
                />

                <select 
                    value={selectedColumnId}
                    onChange={(e) => setSelectedColumnId(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 mb-4"
                >

                {columns.map((column) => (
                    <option key={column.id} value={column.id}>
                        {column.title}
                    </option>
                ))}
            </select>

            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-3 py-1 bg-gray-600 rounded"
                >
                    Cancel
                </button>

                <button
                    onClick={onAdd}
                    className="px-3 py-1 bg-blue-600 rounded"
                >
                    Add
                </button>
            </div>
            </div>
        </div>

    );
}

export default AddTaskModal;