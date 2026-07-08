import { useState } from "react";
import { Sparkles } from "lucide-react";
import { detectTask } from "@/utils/modelRouter";
import { getWorkflow } from "@/utils/workflowEngine";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendPrompt } from "@/services/mesh";

const suggestions = [
  "Prepare me for Google interview",
  "Summarize my PDF",
  "Research latest AI news",
  "Create presentation",
];

export default function PromptInput({ setResult }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

async function handleSubmit() {
  if (!prompt.trim()) return;

  setLoading(true);

  setStatus("🔍 Analyzing task...");
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Detect task and model
  const routing = detectTask(prompt);

  const workflow = getWorkflow(routing.task);

  console.log("Workflow:", workflow);

  console.log("Routing:", routing);

  setStatus(`🤖 Selected Model: ${routing.model}`);
  await new Promise((resolve) => setTimeout(resolve, 600));

  setStatus("⚡ Generating response...");

  const result = await sendPrompt(prompt);

setResult({
  ...result,
  task: routing.task,
  model: routing.model,

  workflow: workflow.workflow,
  workflowSteps: workflow.steps,

  timeline: [
    {
      title: "Prompt Received",
      status: "Completed",
    },
    {
      title: "Task Analyzed",
      status: "Completed",
    },
    {
      title: `Model Selected (${routing.model})`,
      status: "Completed",
    },
    {
      title: `Workflow Selected (${workflow.workflow})`,
      status: "Completed",
    },
    {
      title: "Response Generated",
      status: "Completed",
    },
  ],
});

  setStatus("");

  setLoading(false);
}

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Welcome to MeshOS</h1>

      <p className="mt-3 text-sm sm:text-base text-zinc-400">
        Your AI Operating System. Describe any task and let multiple AI agents
        execute it.
      </p>

      <Textarea
        className="mt-6 sm:mt-8 min-h-36 sm:min-h-44 rounded-2xl bg-zinc-950 border-zinc-700 rounded-2xl bg-zinc-950 border-zinc-700"
        placeholder="Describe your task..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {loading && (
        <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
          <p className="text-sm font-medium text-violet-300">{status}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setPrompt(item)}
            className="rounded-full border border-zinc-700 px-3 py-2 text-xs sm:text-sm transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm text-zinc-500">{prompt.length}/1000</span>

        <Button
          className="rounded-xl"
          onClick={handleSubmit}
          disabled={loading}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {loading ? "Thinking..." : "Execute Task"}
        </Button>
      </div>
    </div>
  );
}
