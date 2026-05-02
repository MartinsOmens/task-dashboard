import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-semibold mb-2">Recent Tasks</h2>

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;