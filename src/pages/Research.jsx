import { useState } from "react";

export default function Research() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);

  function researchTopic() {
    if (!topic.trim()) return;

    setResult({
      summary: `This is a demo AI research summary for "${topic}". MeshOS analyzed the topic and generated the following insights.`,

      findings: [
        "Most recent developments were analyzed.",
        "Important trends were identified.",
        "Relevant technologies were discovered.",
        "Potential future opportunities were highlighted.",
      ],

      sources: ["Wikipedia", "Google Scholar", "GitHub", "Research Papers"],
    });
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] p-8 text-white">
      <h1 className="text-4xl font-bold">🔍 AI Research</h1>

      <p className="mt-3 text-zinc-400">Research any topic using MeshOS.</p>

      <textarea
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Research Quantum Computing"
        className="mt-8 h-40 w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 outline-none"
      />

      <button
        onClick={researchTopic}
        className="mt-5 rounded-xl bg-cyan-600 px-6 py-3 font-semibold hover:bg-cyan-500"
      >
        Research
      </button>

      {result && (
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-semibold">AI Summary</h2>

          <p className="mt-4 text-zinc-300">{result.summary}</p>

          <h3 className="mt-8 text-xl font-semibold">Key Findings</h3>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            {result.findings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Sources</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {result.sources.map((src, index) => (
              <span
                key={index}
                className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300"
              >
                {src}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
