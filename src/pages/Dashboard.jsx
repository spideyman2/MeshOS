import { useState } from "react";

import DashboardLayout from "../components/ui/Dashboard/DashboardLayout";
import PromptInput from "../components/ui/PromptInput/PromptInput";
import ResultPanel from "../components/ui/ResultPanel/ResultPanel";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <PromptInput setResult={setResult} />

        <ResultPanel result={result} />
      </div>
    </DashboardLayout>
  );
}
