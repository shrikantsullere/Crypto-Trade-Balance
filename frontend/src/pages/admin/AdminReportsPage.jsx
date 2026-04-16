import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Reports & Export</h1>
      <Card title="Generate Report">
        <div className="grid gap-3 md:grid-cols-4">
          <Input label="From Date" placeholder="YYYY-MM-DD" />
          <Input label="To Date" placeholder="YYYY-MM-DD" />
          <Input label="Report Type" placeholder="Users / Earnings / Referrals" />
          <Button className="self-end md:w-fit" onClick={() => window.alert("CSV export started. File will appear in Saved Exports.")}>
            Export CSV
          </Button>
        </div>
      </Card>
      <Card title="Saved Exports">
        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-border-subtle p-3">users-report-2026-04-08.csv</div>
          <div className="rounded-xl border border-border-subtle p-3">earnings-report-q2.csv</div>
        </div>
      </Card>
    </div>
  );
}
