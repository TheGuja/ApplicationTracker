import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import CreateTracker from './pages/CreateTracker'
import type { Application } from './types'

function App() {
  const [items, setItems] = useState<Application[]>([]);

  useEffect(() => {
    fetch('https://api.example.com/api/items')
    .then((r) => r.json())
    .then((data) => setItems(data));
  }, []);

  const handleAdd = (app: Application) => {
    setItems(prev => [app, ...prev]);
  }

  const handleEdit = (app: Application) => {
    setItems(prev => prev.map(i => i.id === app.id ? app : i));
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-tracker" element={<CreateTracker onAdd={handleAdd} />} />
      <Route path="/" element={<Dashboard items={items} onAdd={handleAdd} onEdit={handleEdit} />} />
    </Routes>
  )
}

export default App
