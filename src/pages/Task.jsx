import { useEffect, useState } from "react";
import TaskHeader from "../components/Tasks/TaskHeader";
import TaskForm from "../components/Tasks/TaskForm";
import TaskFilters from "../components/Tasks/TaskFilters";
import TaskList from "../components/Tasks/TaskList";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";
import { supabase } from "../lib/supabaseClient";

const Tasks = () => {
  const { tasks, setTasks } = useTasks();
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // ✅ UPDATED FUNCTION
  // Add task to DB and then update state with DB result
  const addTask = async () => {
    if (!title) return;

    const { data, error } = await supabase
      .from("task")
      .insert([
        {
          title: title,
          completed: false, // 👈 using completed now
        },
      ])
      .select();

    if (error) {
      console.error("Error adding task:", error);
      return;
    }

    // ✅ Add new task from DB into state
    setTasks((prev) => [data[0], ...prev]);

    setTitle("");
  };

  // Fetch tasks from DB on component mount

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("task") // 👈 use your exact table name
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching tasks:", error);
      } else {
        setTasks(data);
      }
    };

    fetchTasks();
  }, []);

  // Toggle task completion in DB and then update state with DB result
  const toggleTask = async (id) => {
    // find current task
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const { data, error } = await supabase
      .from("task")
      .update({ completed: !task.completed })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error updating task:", error);
      return;
    }

    // update UI with DB result
    setTasks((prev) => prev.map((t) => (t.id === id ? data[0] : t)));
  };

  //Delete task from DB and then update state

  const deleteTask = async (id) => {
    const { error } = await supabase.from("task").delete().eq("id", id);

    if (error) {
      console.error("Error deleting task:", error);
      return;
    }

    // update UI after successful delete
    setTasks((prev) => prev.filter((t) => t.id !== id));
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
        <TaskForm title={title} setTitle={setTitle} onAdd={addTask} />
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
