import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MakePlan from "../Components/MakePlan";
import MakePlanList from "../Components/MakePlanList";
import { useState } from "react";
import { useEffect } from "react";
import "./Plan.css";

function Plan() {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("plans")) || [];
    setPlans(savedPlans);
  }, []);

  const createPlan = (newPlan) => {
    const updatedPlans = [...plans, newPlan];
    setPlans(updatedPlans);
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));  
  };

  return (
    <div className="plan-container">
      <Navbar />
      <h1>My Travel Plans</h1>
      <MakePlan onCreatePlan={createPlan} />
      <MakePlanList plans={plans} onDeletePlan={deletePlan} />
      <Footer />
    </div>
  );
}

export default Plan;
