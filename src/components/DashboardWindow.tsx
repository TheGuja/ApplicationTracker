type Application = {
    application: string,
    date: string,
    completed: string,
}

export default function DashboardWindow({ applications }: { applications: Application[] }) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
                <aside className="col-span-1 bg-white rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <ul className="space-y-2 text-left">
                        <li className="text-gray-700 font-medium">Dashboard</li>
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Create Tracker</li>
                        <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Settings</li>
                    </ul>
                </aside>
                <main className="col-span-3">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <div className="flex items-center space-x-3">
                            <input type="text" placeholder="Search applications..." className="px-3 py-2 border rounded-md focus:outline-none" />
                            <button className="px-3 py-2 bg-blue-600 text-white rounded-md">New</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-500">Total Applications</p>
                            <p className="text-2xl font-bold">{applications.length}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-500">Completed</p>
                            <p className="text-2xl font-bold">{applications.filter(a => a.completed === 'Yes').length}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-sm text-gray-500">In Progress</p>
                            <p className="text-2xl font-bold">{applications.filter(a => a.completed !== 'Yes').length}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="grid grid-cols-3 bg-gray-50 border-b p-3 font-semibold">
                            <div>Application</div>
                            <div>Date Started</div>
                            <div className="text-center">Completed</div>
                        </div>
                        {applications.length === 0 ? (
                            <div className="p-6 text-center text-gray-500">No applications yet</div>
                        ) : (
                            applications.map((application, idx) => (
                                <div key={idx} className="grid grid-cols-3 p-3 hover:bg-gray-50 border-b items-center">
                                    <div className="text-gray-700">{application.application}</div>
                                    <div className="text-gray-600">{application.date}</div>
                                    <div className="text-center">
                                        <span className={`inline-block px-2 py-1 rounded-full text-sm ${application.completed === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {application.completed}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}