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
      reason: "Programming-related keywords were detected in the prompt.",
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
      reason: "Research and analysis keywords were detected in the prompt.",
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
      reason: "Writing-related keywords were detected in the prompt.",
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
      reason: "Document processing keywords were detected in the prompt.",
    };
  }

  return {
    task: "General",
    model: "GPT",
    reason:
      "No specific task type was detected, so the general-purpose model was selected.",
  };
}
