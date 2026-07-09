export default function Compare() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Compare AI Models</h1>

      <p className="mt-3 text-zinc-400">
        Run the same prompt across multiple AI models and compare results.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {["GPT", "Claude", "Gemini"].map((model) => (
          <div
            key={model}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
          >
            <h2 className="text-xl font-semibold">{model}</h2>

            <p className="mt-4 text-zinc-400">Waiting for response...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
