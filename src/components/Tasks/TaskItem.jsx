import { motion } from "framer-motion";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between border p-2 rounded">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 text-blue-600 rounded border-gray-300"
        />
        <motion.span
          animate={{ opacity: task.completed ? 0.5 : 1 }}
          className={`select-none ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        >
          {task.title}
        </motion.span>
      </label>

      <button onClick={() => onDelete(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
