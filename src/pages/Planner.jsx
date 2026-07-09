import { useState } from "react";

export default function Planner() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState([]);

  function generatePlan() {
    if (!goal.trim()) return;

    setPlan([
      "Analyze the task requirements",
      "Choose the best AI workflow",
      "Assign suitable AI agents",
      "Execute the workflow",
      "Review and validate results",
      "Generate final output",
    ]);
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] p-8 text-white">
      <h1 className="text-4xl font-bold">🧠 AI Planner</h1>

      <p className="mt-3 text-zinc-400">
        Generate an execution plan for any task.
      </p>

      <textarea
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Example: Build an ecommerce website"
        className="mt-8 h-40 w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 outline-none"
      />

      <button
        onClick={generatePlan}
        className="mt-5 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
      >
        Generate Plan
      </button>

      {plan.length > 0 && (
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">Execution Plan</h2>

          <div className="space-y-4">
            {plan.map((step, index) => (
              <div key={index} className="rounded-xl bg-zinc-950 p-4">
                <span className="font-bold text-violet-400">
                  Step {index + 1}
                </span>

                <p className="mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
