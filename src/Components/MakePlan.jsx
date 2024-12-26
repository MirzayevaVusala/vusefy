import { useState } from "react";
import "./MakePlan.css";

function MakePlan({ onCreatePlan }) {
    const [newPlan, setNewPlan] = useState("");

    const makePlan = () => {
        if (!newPlan) return;

        const request = {
            id: Math.floor(Math.random() * 99),
            content: newPlan,
        };
        onCreatePlan(request);
        setNewPlan("");
    };

    return (
        <div className="todo-create">
            <input
                value={newPlan}
                onChange={(e) => setNewPlan(e.target.value)}
                type="text"
                placeholder="Create your travel plan"
            />
            <button onClick={makePlan}>Create</button>
        </div>
    );
}

export default MakePlan;
