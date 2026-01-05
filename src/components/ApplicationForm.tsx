import { useState } from 'react'
import type { Application } from '../types.ts'

export default function ApplicationForm({
  onSubmit,
  onCancel,
  initialValues,
  submitLabel = 'Create',
  showCompleted = false,
}: {
  onSubmit: (app: Application) => void,
  onCancel?: () => void,
  initialValues?: Partial<Application>,
  submitLabel?: string,
  showCompleted?: boolean,
}) {
  const [name, setName] = useState(initialValues?.application || '')
  const [date, setDate] = useState(initialValues?.date || '')
  const [comments, setComments] = useState(initialValues?.comments || '')
  const [frequency, setFrequency] = useState(initialValues?.alertFrequency || 'None')
  const [customDays, setCustomDays] = useState('')
  const [completed, setCompleted] = useState(initialValues?.completed || 'No')

  const handleSubmit = (e?: any) => {
    e?.preventDefault()
    if (!name || !date) return
    const alertFrequency = frequency === 'Custom' && customDays ? `${customDays} day(s)` : frequency
    const newApp: Application = { id: initialValues?.id, application: name, date, completed, comments, alertFrequency }
    onSubmit(newApp)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Application Name*</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded" placeholder="My App" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date Applied*</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Comments</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded" placeholder="Optional notes" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Alert Frequency</label>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded">
          <option>None</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option value="Custom">Custom (in days)</option>
        </select>
        {frequency === 'Custom' && (
          <input value={customDays} onChange={(e) => setCustomDays(e.target.value)} type="number" min={1} placeholder="Days" className="w-full mt-2 px-3 py-2 border rounded" />
        )}
      </div>

      {showCompleted && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Completed</label>
          <select value={completed} onChange={(e) => setCompleted(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded">
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <button type="button" onClick={() => onCancel?.()} className="px-3 py-2 border rounded">Cancel</button>
        <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">{submitLabel}</button>
      </div>
    </form>
  )
}
