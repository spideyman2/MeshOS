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
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">AI Response</h2>

        <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-300">
          {result.model}
        </span>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-zinc-900 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Task Type
          </p>

          <p className="mt-2 font-semibold text-white">{result.task}</p>
        </div>

        <div className="rounded-xl bg-zinc-900 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Selected Model
          </p>

          <p className="mt-2 font-semibold text-violet-400">{result.model}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 p-6">
        <p className="whitespace-pre-wrap text-zinc-300">{result.response}</p>
      </div>

      {result.timeline && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
          <h3 className="mb-6 text-lg font-semibold">Execution Timeline</h3>

          <div className="space-y-5">
            {result.timeline.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-lg text-green-400">
                  ✓
                </div>

                <div>
                  <p className="font-medium text-white">{step.title}</p>

                  <p className="text-sm text-zinc-500">{step.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
