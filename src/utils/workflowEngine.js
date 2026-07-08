export function getWorkflow(task) {
  switch (task) {
    case "Programming":
      return {
        workflow: "Code Generation",
        steps: [
          "Analyze Request",
          "Generate Code",
          "Review Code",
          "Return Result",
        ],
      };

    case "Research":
      return {
        workflow: "Research Pipeline",
        steps: [
          "Analyze Topic",
          "Search Information",
          "Summarize Findings",
          "Generate Report",
        ],
      };

    case "Writing":
      return {
        workflow: "Writing Assistant",
        steps: [
          "Understand Context",
          "Draft Content",
          "Improve Writing",
          "Finalize Response",
        ],
      };

    case "Document Analysis":
      return {
        workflow: "Document Processing",
        steps: [
          "Read Document",
          "Extract Key Points",
          "Summarize Content",
          "Return Summary",
        ],
      };

    default:
      return {
        workflow: "General Assistant",
        steps: ["Analyze Prompt", "Generate Response", "Return Result"],
      };
  }
}
