import DashboardLayout from "../components/ui/Dashboard/DashboardLayout";
import PromptInput from "../components/ui/PromptInput/PromptInput";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center px-8 py-10">
        <PromptInput />
      </div>
    </DashboardLayout>
  );
}
