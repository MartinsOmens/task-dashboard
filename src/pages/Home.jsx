import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">TaskFlow</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="text-gray-600 hover:text-black"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Manage your tasks in real-time
        </h2>
        <p className="text-gray-600 mb-6">
          Stay organized, productive, and in control.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate('/signup')}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="border px-6 py-3 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home