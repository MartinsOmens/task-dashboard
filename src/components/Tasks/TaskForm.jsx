const TaskForm = ({ title, setTitle, onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1 rounded"
        placeholder="Enter task..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
