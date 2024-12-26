import "./CreatePlan.css";

function CreatePlan({ plan }) {
    return (
        <div className="plan-card content-wrapper">
            <p>{plan.content}</p>
        </div>
    );
}

export default CreatePlan;
