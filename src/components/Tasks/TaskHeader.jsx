
const TaskHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        + New Task
      </button>
    </div>
  );
};

export default TaskHeader;