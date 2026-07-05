import { Brain, Search, FileText, ClipboardList } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#111113] p-6">
      <h2 className="text-sm text-zinc-400 uppercase mb-6">AI Agents</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain size={20} />
          Planner
        </div>

        <div className="flex items-center gap-3">
          <Search size={20} />
          Research
        </div>

        <div className="flex items-center gap-3">
          <FileText size={20} />
          Documents
        </div>

        <div className="flex items-center gap-3">
          <ClipboardList size={20} />
          Report
        </div>
      </div>
    </aside>
  );
}
