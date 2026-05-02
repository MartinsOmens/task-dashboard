import { createContext, useContext, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // 🔹 FETCH TASKS (moved here)
  const fetchTasks = async (userId) => {
    const { data, error } = await supabase
      .from("task")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error) setTasks(data);
  };

  // 🔹 ADD TASK
  const addTask = async (title, userId) => {
    const { data, error } = await supabase
      .from("task")
      .insert([{ title, completed: false, user_id: userId }])
      .select();

    if (!error) {
      setTasks((prev) => [data[0], ...prev]);
    }
  };

  // 🔹 TOGGLE TASK

  const toggleTask = async (task) => {
    const { data, error } = await supabase
      .from("task")
      .update({ completed: !task.completed })
      .eq("id", task.id)
      .select();

    if (error) {
      console.error("Toggle error:", error);
      return;
    }

    setTasks((prev) => prev.map((t) => (t.id === task.id ? data[0] : t)));
  };

  // 🔹 DELETE TASK
  const deleteTask = async (id) => {
    const { error } = await supabase.from("task").delete().eq("id", id);

    if (!error) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
