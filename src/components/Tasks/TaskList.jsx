import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (!tasks.length) {
    return <p className="text-gray-500">No tasks yet</p>;
  }

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
