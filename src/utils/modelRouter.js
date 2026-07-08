export function detectTask(prompt) {
  const text = prompt.toLowerCase();

  if (
    text.includes("code") ||
    text.includes("program") ||
    text.includes("java") ||
    text.includes("python") ||
    text.includes("javascript") ||
    text.includes("bug") ||
    text.includes("debug")
  ) {
    return {
      task: "Programming",
      model: "DeepSeek",
    };
  }

  if (
    text.includes("research") ||
    text.includes("analyze") ||
    text.includes("analysis") ||
    text.includes("news") ||
    text.includes("report")
  ) {
    return {
      task: "Research",
      model: "Gemini",
    };
  }

  if (
    text.includes("write") ||
    text.includes("email") ||
    text.includes("blog") ||
    text.includes("essay") ||
    text.includes("resume")
  ) {
    return {
      task: "Writing",
      model: "Claude",
    };
  }

  if (
    text.includes("summarize") ||
    text.includes("pdf") ||
    text.includes("document")
  ) {
    return {
      task: "Document Analysis",
      model: "Gemini",
    };
  }

  return {
    task: "General",
    model: "GPT",
  };
}
