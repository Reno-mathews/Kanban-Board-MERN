import { SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

function Column({ column, onDeleteTask, onEditTask }) {
    return(
        <div className="bg-gray-800 rounded-lg p-4 w-72 flex-shrink-0 transition-colours hover:bg-gray-700">
            <h2 className="text-lg font-semibold mb-4 justify-between items-center">
                <span>{column.title}</span>
                <span className="text-sm text-gray-400">
                    {column.tasks.length}
                </span>
            </h2>

            <SortableContext
                items={column.tasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-3">
                    {column.tasks.length === 0 && (
                        <p className="text-sm text-gray-400 text-center italic">
                            No tasks yet
                        </p>
                    )}
                    {column.tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={onDeleteTask}
                            onEdit={onEditTask}
                        />
                    ))}
                </div>
            </SortableContext>
            </div>
    );
}

export default Column;
