import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const kpis = [
    { label: "Total Users", value: "18,420" },
    { label: "Active Users", value: "12,086" },
    { label: "Pending Verifications", value: "164" },
    { label: "Open Support Tickets", value: "27" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-text-secondary">Platform overview, operations queue, and alerts</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <p className="text-sm text-text-secondary">{kpi.label}</p>
            <p className="mt-2 text-2xl font-semibold text-brand-green">{kpi.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Pending Actions" className="lg:col-span-2">
          <div className="space-y-3">
            {[
              "42 users awaiting Telegram verification",
              "8 payout adjustment requests pending approval",
              "17 new support conversations unassigned",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-border-subtle p-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card title="Quick Ops">
          <div className="space-y-3">
            <Button
              className="w-full"
              onClick={() => {
                window.alert("Opening users management queue.");
                navigate("/admin/users");
              }}
            >
              Open Users Queue
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                window.alert("Opening earnings and commission review.");
                navigate("/admin/earnings");
              }}
            >
              Review Payouts
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                window.alert("Opening notifications manager to create a new broadcast.");
                navigate("/admin/notifications");
              }}
            >
              Create Broadcast
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
