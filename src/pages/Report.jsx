import { useState } from "react";

export default function Report() {
  const [generated, setGenerated] = useState(false);

  function generateReport() {
    setGenerated(true);
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] p-8 text-white">
      <h1 className="text-4xl font-bold">📊 AI Reports</h1>

      <p className="mt-3 text-zinc-400">
        View AI execution statistics and generate reports.
      </p>

      <button
        onClick={generateReport}
        className="mt-8 rounded-xl bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-500"
      >
        Generate Report
      </button>

      {generated && (
        <>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-zinc-900 p-6">
              <p className="text-zinc-500">Tasks Executed</p>
              <h2 className="mt-3 text-3xl font-bold">24</h2>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              <p className="text-zinc-500">AI Models Used</p>
              <h2 className="mt-3 text-3xl font-bold">4</h2>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              <p className="text-zinc-500">Agents Activated</p>
              <h2 className="mt-3 text-3xl font-bold">12</h2>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              <p className="text-zinc-500">Success Rate</p>
              <h2 className="mt-3 text-3xl font-bold text-green-400">100%</h2>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold">Execution Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between rounded-xl bg-zinc-950 p-4">
                <span>Total Workflows</span>
                <span>8</span>
              </div>

              <div className="flex justify-between rounded-xl bg-zinc-950 p-4">
                <span>Average Response Time</span>
                <span>1.2 sec</span>
              </div>

              <div className="flex justify-between rounded-xl bg-zinc-950 p-4">
                <span>Most Used Model</span>
                <span>GPT</span>
              </div>

              <div className="flex justify-between rounded-xl bg-zinc-950 p-4">
                <span>Most Common Task</span>
                <span>Programming</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
