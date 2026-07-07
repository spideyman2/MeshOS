export default function ResultPanel({ result }) {
  if (!result) {
    return (
      <div className="w-full max-w-4xl rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/30 p-8 text-center">
        <h2 className="text-xl font-semibold text-zinc-300">
          Ready for your first task
        </h2>

        <p className="mt-2 text-zinc-500">
          Execute a prompt to see the AI response here.
        </p>
      </div>
    );
  }

  if (!result.success) {
    return (
      <div className="w-full max-w-4xl rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
        <h2 className="text-xl font-bold text-red-400">❌ Request Failed</h2>

        <p className="mt-3 text-zinc-300">{result.error}</p>

        <p className="mt-6 text-sm text-zinc-500">
          Please check your backend or Mesh API connection and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">AI Response</h2>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
          {result.model}
        </span>
      </div>

      <div className="rounded-2xl bg-zinc-950 p-6">
        <p className="whitespace-pre-wrap text-zinc-300">{result.response}</p>
      </div>
    </div>
  );
}
