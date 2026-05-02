const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 mb-4">
      {["All", "Completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;