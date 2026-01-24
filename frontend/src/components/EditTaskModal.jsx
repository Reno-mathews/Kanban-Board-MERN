function EditTaskModal({
    isOpen,
    onClose,
    onSave,
    editedTitle,
    setEditedTitle,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 mb-4"
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-3 py-1 bg-gray-600 rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onSave}
                        className="px-3 py-1 bg-blue-600 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;