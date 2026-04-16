import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function AdminTelegramPage() {
  const queue = [
    { id: "TB-10058", name: "Nina Roy", joined: "Self-confirmed", status: "Pending Review" },
    { id: "TB-10244", name: "Amit Rao", joined: "Bot verified", status: "Verified" },
    { id: "TB-10291", name: "Elena", joined: "No evidence", status: "Rejected" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Telegram Verification</h1>
      <Card title="Verification Queue">
        <div className="space-y-3 text-sm">
          {queue.map((row) => (
            <div key={row.id} className="rounded-xl border border-border-subtle p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p>
                  {row.id} - {row.name} - {row.joined} - {row.status}
                </p>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => window.alert(`Telegram verification approved for ${row.id}.`)}>
                    Verify
                  </Button>
                  <Button variant="secondary" onClick={() => window.alert(`Telegram verification rejected for ${row.id}.`)}>
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
