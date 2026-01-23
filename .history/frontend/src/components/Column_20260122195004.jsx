import { SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

function Column({ column }) {
    return(
        <div className="bg-gray-800 rounded-lg p-4 w-72 flex-shrink-0">
            <h2 className="text-lg font-semibold mb-4 text-center">
                {column.title}
            </h2>

            <SortableContext
                items={column.tasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-3">
                    {column.tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={onDeleteTask}
                        />
                    ))}
                </div>
            </SortableContext>
            </div>
    );
}

export default Column;
