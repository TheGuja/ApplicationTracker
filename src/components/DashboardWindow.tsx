import { useState } from "react";
import Sidebar from "./Sidebar";
import ApplicationForm from "./ApplicationForm";
import type { Application } from "../types.ts";

export default function DashboardWindow({ applications, onAdd, onEdit }: { applications: Application[], onAdd?: (app: Application) => void, onEdit?: (app: Application) => void }) {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Application | null>(null);

    const handleCreate = (app: Application) => {
        const withId = { ...app, id: app.id || Date.now().toString() };
        onAdd?.(withId);
        setShowForm(false);
    }

    const handleEdit = (app: Application) => {
        onEdit?.(app);
        setEditing(null);
    }

    const toggleCompleted = (app: Application) => {
        const updated = { ...app, completed: app.completed === 'Yes' ? 'No' : 'Yes' };
        onEdit?.(updated);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
                <Sidebar />
                <main className="col-span-3">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <div className="flex items-center space-x-3">
                            <input type="text" placeholder="Search applications..." className="px-3 py-2 border rounded-md focus:outline-none" />
                            <button onClick={() => setShowForm(true)} className="px-3 py-2 bg-blue-600 text-white rounded-md">New</button>
                        </div>
                        {showForm && (
                            <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
                                <div role="dialog" aria-modal="true" className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                                    <h2 className="text-lg font-semibold mb-4">Create Application</h2>
                                    <ApplicationForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />
                                </div>
                            </div>
                        )}

                        {editing && (
                            <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
                                <div role="dialog" aria-modal="true" className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                                    <h2 className="text-lg font-semibold mb-4">Edit Application</h2>
                                    <ApplicationForm initialValues={editing} showCompleted onSubmit={handleEdit} onCancel={() => setEditing(null)} submitLabel="Save" />
                                </div>
                            </div>
                        )}
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
                        <div className="grid grid-cols-4 bg-gray-50 border-b p-3 font-semibold">
                            <div>Application</div>
                            <div>Date Started</div>
                            <div className="text-center">Completed</div>
                            <div className="text-center">Actions</div>
                        </div>
                        {applications.length === 0 ? (
                            <div className="p-6 text-center text-gray-500">No applications yet</div>
                        ) : (
                            applications.map((application, idx) => (
                                <div key={application.id ?? idx} className="grid grid-cols-4 p-3 hover:bg-gray-50 border-b items-center">
                                    <div className="text-gray-700">
                                        <div>{application.application}</div>
                                        {application.comments && <div className="text-sm text-gray-500">{application.comments}</div>}
                                    </div>
                                    <div className="text-gray-600">{application.date}</div>
                                    <div className="text-center">
                                        <button onClick={() => toggleCompleted(application)} className={`inline-block px-2 py-1 rounded-full text-sm ${application.completed === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} cursor-pointer`}>
                                            {application.completed}
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <button onClick={() => setEditing(application)} className="px-2 py-1 border rounded text-sm">Edit</button>
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