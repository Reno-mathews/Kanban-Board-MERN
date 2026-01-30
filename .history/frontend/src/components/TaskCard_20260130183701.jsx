import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, onDelete, onEdit }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div>
        <div 
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-gray-700 p-3 rounded shadow hover:bg-gray-600 cursor-grab transition active-curosr-grabbing"
        >
        <p className="text-sm">{task.title}</p>

</div>

        

        <button 
            onClick={(e) =>{ 
            e.stopPropagation();
            onEdit(task)}
            }
            className="text-red-400 hover:text-red-600"
        >
         ✏️
        </button>
</div>
    );
}

export default TaskCard;