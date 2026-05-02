import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import TaskList from "../components/TaskList";
import { getUser } from "../lib/dummyAuth";
import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTasks();
  const user = getUser();
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.filter((t) => !t.completed).length;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header user={user} />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p>Total</p>
            <h2 className="text-xl font-bold">{tasks.length}</h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p>Completed</p>
            <h2 className="text-xl font-bold">{completed}</h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p>Pending</p>
            <h2 className="text-xl font-bold">{pending}</h2>
          </div>
        </div>

        {/* Recent Tasks */}
        <TaskList tasks={tasks.slice(0, 5)} />
      </div>
    </div>
  );
};

export default Dashboard;
