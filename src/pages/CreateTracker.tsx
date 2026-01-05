import { useNavigate } from 'react-router'
import Sidebar from '../components/Sidebar'
import ApplicationForm from '../components/ApplicationForm'
import type { Application } from '../types.ts'

export default function CreateTracker({ onAdd }: { onAdd?: (app: Application) => void }) {
  const navigate = useNavigate()

  const handleSubmit = (app: Application) => {
    const withId = { ...app, id: app.id || Date.now().toString() }
    onAdd?.(withId)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
        <Sidebar />

        <main className="col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Create Tracker</h1>
            <div className="flex items-center space-x-3">
              <input type="text" placeholder="Search applications..." className="px-3 py-2 border rounded-md focus:outline-none" disabled />
              <button onClick={() => navigate('/')} className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md">Back</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <ApplicationForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
          </div>
        </main>
      </div>
    </div>
  )
}
