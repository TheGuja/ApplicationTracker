import { NavLink } from 'react-router'

const baseClass = 'text-gray-600 hover:text-gray-900 cursor-pointer'
const activeClass = 'text-blue-600 font-medium'

export default function Sidebar() {
  return (
    <aside className="col-span-1 bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <nav>
        <ul className="space-y-2 text-left">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? `${activeClass}` : `${baseClass}`}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-tracker" className={({ isActive }) => isActive ? `${activeClass}` : `${baseClass}`}>
              Create Tracker
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? `${activeClass}` : `${baseClass}`}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
