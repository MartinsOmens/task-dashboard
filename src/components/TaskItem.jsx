// src/components/TaskItem.jsx
const TaskItem = ({ task }) => {
  return (
    <div className="flex justify-between items-center p-3 border rounded">
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
      <span
        className={`text-xs px-2 py-1 rounded ${
          task.completed ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {task.completed ? "Done" : "Pending"}
      </span>
    </div>
  );
};

export default TaskItem;