import { useState } from "react";

import DashboardLayout from "../components/ui/Dashboard/DashboardLayout";
import PromptInput from "../components/ui/PromptInput/PromptInput";
import ResultPanel from "../components/ui/ResultPanel/ResultPanel";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-8 py-10">
        <PromptInput setResult={setResult} />

        <ResultPanel result={result} />
      </div>
    </DashboardLayout>
  );
}
