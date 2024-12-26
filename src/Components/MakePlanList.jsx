import CreatePlan from "./CreatePlan";
import "./MakePlanList.css"
function MakePlanList({ plans, onDeletePlan }) {
    return (
        <div className="plan-list">
            {plans.map((plan) => (
                <div key={plan.id} className="plan-card">
                    <CreatePlan plan={plan} />
                    <button className="delete-btn" onClick={() => onDeletePlan(plan.id)}>
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MakePlanList;
