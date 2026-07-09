export function getAgents(task) {
  switch (task) {
    case "Programming":
      return {
        agents: [
          {
            name: "Planner",
            status: "Pending",
            output: "Planning coding task...",
          },
          {
            name: "Coder",
            status: "Pending",
            output: "Generating solution...",
          },
          {
            name: "Reviewer",
            status: "Pending",
            output: "Reviewing generated code...",
          },
        ],
      };

    case "Research":
      return {
        agents: [
          {
            name: "Planner",
            status: "Pending",
            output: "Planning research...",
          },
          {
            name: "Researcher",
            status: "Pending",
            output: "Collecting information...",
          },
          {
            name: "Fact Checker",
            status: "Pending",
            output: "Verifying sources...",
          },
        ],
      };

    case "Writing":
      return {
        agents: [
          {
            name: "Planner",
            status: "Pending",
            output: "Planning document...",
          },
          {
            name: "Writer",
            status: "Pending",
            output: "Writing content...",
          },
          {
            name: "Editor",
            status: "Pending",
            output: "Improving writing...",
          },
        ],
      };

    case "Document Analysis":
      return {
        agents: [
          {
            name: "Planner",
            status: "Pending",
            output: "Preparing document...",
          },
          {
            name: "Analyzer",
            status: "Pending",
            output: "Analyzing document...",
          },
          {
            name: "Summarizer",
            status: "Pending",
            output: "Creating summary...",
          },
        ],
      };

    default:
      return {
        agents: [
          {
            name: "Assistant",
            status: "Pending",
            output: "Processing request...",
          },
        ],
      };
  }
}
