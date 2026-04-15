import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function AdminNetworkPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Referral & Genealogy</h1>
      <Card>
        <div className="grid gap-3 md:grid-cols-4">
          <Input label="Search member" placeholder="Name or ID" />
          <Input label="Level filter" placeholder="Level 1-10" />
          <Input label="Anomaly type" placeholder="Missing sponsor" />
          <Button className="self-end md:w-fit" onClick={() => window.alert("Network audit completed. Review flagged items below.")}>
            Run Audit
          </Button>
        </div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Tree Review">
          {["Root Sponsor", "Level 1 (22)", "Level 2 (136)", "Level 3 (492)"].map((row, idx) => (
            <div
              key={row}
              className="mb-3 rounded-xl border border-border-subtle bg-page-bg p-3 text-sm"
              style={{ marginLeft: `${idx * 14}px` }}
            >
              {row}
            </div>
          ))}
        </Card>
        <Card title="Mapping Corrections Queue">
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-border-subtle p-3">TB-10058 to sponsor mismatch detected</div>
            <div className="rounded-xl border border-border-subtle p-3">TB-10291 to orphan node detected</div>
            <Button onClick={() => window.alert("Opening full mapping correction queue.")}>Open Full Queue</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
