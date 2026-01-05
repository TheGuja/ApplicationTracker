import DashboardWindow from "../components/DashboardWindow";

import type { Application } from '../types'

export default function Dashboard({ items, onAdd, onEdit }: { items: Application[], onAdd: (app: Application) => void, onEdit: (app: Application) => void }) {
    return (
        <div className="h-screen">
            <DashboardWindow applications={items} onAdd={onAdd} onEdit={onEdit} />
        </div>
    )
}