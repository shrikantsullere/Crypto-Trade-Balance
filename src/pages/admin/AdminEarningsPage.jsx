import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function AdminEarningsPage() {
  const rows = [
    { ref: "TXN-7712", member: "TB-10021", amount: "$44", status: "Pending" },
    { ref: "TXN-7713", member: "TB-10211", amount: "$18", status: "Approved" },
    { ref: "TXN-7714", member: "TB-10904", amount: "$26", status: "Review" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Earnings & Commissions</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Today Credits">$1,248</Card>
        <Card title="Pending Payout">$4,106</Card>
        <Card title="Manual Reviews">19</Card>
      </div>
      <Card title="Payout Queue">
        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.ref} className="rounded-xl border border-border-subtle p-3 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p>
                  {row.ref} - {row.member} - {row.amount} - {row.status}
                </p>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => window.alert(`Payout ${row.ref} approved.`)}>
                    Approve
                  </Button>
                  <Button variant="secondary" onClick={() => window.alert(`Payout ${row.ref} rejected.`)}>
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
