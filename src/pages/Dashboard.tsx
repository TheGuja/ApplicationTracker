import { useState } from "react"
import { useEffect } from "react"
import DashboardWindow from "../components/DashboardWindow";

type Application = {
    application: string,
    date: string,
    completed: string,
}

export default function Dashboard() {
    const [items, setItems] = useState<Application[]>([]);

    useEffect(() => {
        fetch('https://api.example.com/api/items')
        .then((r) => r.json())
        .then((data) => setItems(data));
    }, []);

    return (
        <div className="h-screen">
            <DashboardWindow applications={items}/>
            {/* <div>
                <h1>Dashboard</h1>
                <div className="flex flex-row">
                    <h1 className="border">Application</h1>
                    <h1 className="border">Date Started</h1>
                    <h1 className="border">Completed</h1>
                </div>
                {items.map((item) => 
                    <p>{item.application} {item.date}</p>
                )}
            </div> */}


        </div>
    )
}