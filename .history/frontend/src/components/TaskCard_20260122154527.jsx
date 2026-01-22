import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, onDelete }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id });
    return (
        <div className="bg-gray-700 p-3 rounded shadow hover:bg-gray-600 cursor-pointer transition">
            <p className="text-sm">{task.title}</p>
        </div>
    );
}

export default TaskCard;