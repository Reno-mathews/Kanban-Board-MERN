import TaskCard from "./TaskCArd";

function Column({ column }) {
    return(
        <div className="bg-gray-800 rounded-lg p-4 w-72 flex-shrink-0">
            <h2 className="text-lg font-semibold mb-4 text-center">
                {column.title}
            </h2>

            <div className="space-y-3">
                {column.tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default Column;
