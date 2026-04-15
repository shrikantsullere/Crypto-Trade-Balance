import Card from "../components/ui/Card";

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Earnings</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {["Total Earned: $12,480", "Pending: $1,200", "Paid: $11,280"].map((item) => (
          <Card key={item}>
            <p className="text-sm font-medium">{item}</p>
          </Card>
        ))}
      </div>
      <Card title="Level-wise Earnings">
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle text-xs uppercase tracking-wide text-text-muted">
                <th className="px-3 py-2">Level</th>
                <th className="px-3 py-2">Members</th>
                <th className="px-3 py-2">Rate</th>
                <th className="px-3 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-b border-border-subtle/70">
                  <td className="px-3 py-3">Level {i + 1}</td>
                  <td className="px-3 py-3">{(i + 1) * 12}</td>
                  <td className="px-3 py-3">$2.00</td>
                  <td className="px-3 py-3">${(i + 1) * 240}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-2 md:hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border-subtle p-3 text-sm">
              <p className="font-medium">Level {i + 1}</p>
              <p className="text-text-secondary">Members: {(i + 1) * 12}</p>
              <p className="text-text-secondary">Rate: $2.00</p>
              <p className="text-text-secondary">Amount: ${(i + 1) * 240}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Transaction History">
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle text-xs uppercase tracking-wide text-text-muted">
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "08 Apr 2026", type: "Commission", amount: "+$120", status: "Success" },
                { date: "07 Apr 2026", type: "Bonus", amount: "+$240", status: "Success" },
              ].map((row) => (
                <tr key={`${row.date}-${row.type}`} className="border-b border-border-subtle/70">
                  <td className="px-3 py-3">{row.date}</td>
                  <td className="px-3 py-3">{row.type}</td>
                  <td className="px-3 py-3">{row.amount}</td>
                  <td className="px-3 py-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2 md:hidden">
          {[
            { date: "08 Apr 2026", type: "Commission", amount: "+$120", status: "Success" },
            { date: "07 Apr 2026", type: "Bonus", amount: "+$240", status: "Success" },
          ].map((row) => (
            <div key={`${row.date}-${row.type}`} className="rounded-xl border border-border-subtle p-3 text-sm">
              <p className="font-medium">{row.type}</p>
              <p className="text-text-secondary">{row.date}</p>
              <p className="text-text-secondary">{row.amount}</p>
              <p className="text-text-secondary">{row.status}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
