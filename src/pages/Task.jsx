import { useEffect, useState } from "react";
import TaskHeader from "../components/Tasks/TaskHeader";
import TaskForm from "../components/Tasks/TaskForm";
import TaskFilters from "../components/Tasks/TaskFilters";
import TaskList from "../components/Tasks/TaskList";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";
import { supabase } from "../lib/supabaseClient";

const Tasks = () => {
  const { tasks, fetchTasks, addTask, toggleTask, deleteTask } = useTasks();

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔹 load tasks for current user
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (user) {
        fetchTasks(user.id);
      }
    };

    load();
  }, []);

  const handleAdd = async () => {
    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    if (!user || !title) return;

    addTask(title, user.id);
    setTitle("");
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <TaskHeader />
        <TaskForm title={title} setTitle={setTitle} onAdd={handleAdd} />
        <TaskFilters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default Tasks;
