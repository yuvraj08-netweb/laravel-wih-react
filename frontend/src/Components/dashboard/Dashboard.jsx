import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-slate-800 text-white">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-700 p-5 shadow-lg">
                <div className="flex flex-col gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
                        Dashboard
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300">
                        User
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-gray-900">
                <h1 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h1>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
