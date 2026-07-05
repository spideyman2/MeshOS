import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const suggestions = [
  "Prepare me for Google interview",
  "Summarize my PDF",
  "Research latest AI news",
  "Create presentation",
];

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h1 className="text-4xl font-bold">Welcome to MeshOS</h1>

      <p className="mt-3 text-zinc-400">
        Your AI Operating System. Describe any task and let multiple AI agents
        execute it.
      </p>

      <Textarea
        className="mt-8 min-h-44 rounded-2xl bg-zinc-950 border-zinc-700"
        placeholder="Describe your task..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="mt-6 flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setPrompt(item)}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-violet-500 hover:bg-violet-500/10 transition"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-zinc-500">{prompt.length}/1000</span>

        <Button className="rounded-xl">
          <Sparkles className="mr-2 h-4 w-4" />
          Execute Task
        </Button>
      </div>
    </div>
  );
}
