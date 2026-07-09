import { useEffect, useState } from "react";

export default function AgentPanel({ agents = [] }) {
  const [agentStates, setAgentStates] = useState([]);

  useEffect(() => {
    if (!agents.length) return;

    const updated = agents.map((agent) => ({
      ...agent,
      status: "Pending",
    }));

    setAgentStates(updated);

    let index = 0;

    const interval = setInterval(() => {
      setAgentStates((prev) => {
        const next = [...prev];

        if (index > 0) {
          next[index - 1].status = "Completed";
        }

        if (index < next.length) {
          next[index].status = "Running";
          index++;
        } else {
          clearInterval(interval);
        }

        return [...next];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [agents]);

  const getBadge = (status) => {
    switch (status) {
      case "Running":
        return "bg-yellow-500/20 text-yellow-400";
      case "Completed":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-zinc-700 text-zinc-300";
    }
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
      <h3 className="mb-5 text-lg font-semibold">AI Agents</h3>

      <div className="space-y-4">
        {agentStates.map((agent, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-zinc-950 p-4"
          >
            <div>
              <h4 className="font-semibold text-white">{agent.name}</h4>

              <p className="mt-1 text-sm text-zinc-500">{agent.output}</p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm ${getBadge(agent.status)}`}
            >
              {agent.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
