import {
  Brain,
  Search,
  FileText,
  ClipboardList,
  LayoutDashboard,
  GitCompare,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#111113] p-6">
      <h2 className="text-sm text-zinc-400 uppercase mb-6">AI Agents</h2>

      <div className="space-y-2">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/planner"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <Brain size={20} />
          Planner
        </NavLink>

        <NavLink
          to="/research"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <Search size={20} />
          Research
        </NavLink>

        <NavLink
          to="/documents"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <FileText size={20} />
          Documents
        </NavLink>

        <NavLink
          to="/report"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <ClipboardList size={20} />
          Report
        </NavLink>

        <NavLink
          to="/compare"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-zinc-800"
        >
          <GitCompare size={20} />
          Compare AI
        </NavLink>
      </div>
    </aside>
  );
}
