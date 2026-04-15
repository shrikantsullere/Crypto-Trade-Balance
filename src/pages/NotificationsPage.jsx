import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function NotificationsPage() {
  const [items, setItems] = useState([
    { id: 1, title: "New referral joined your network", status: "Unread", time: "2m ago", isUnread: true },
    { id: 2, title: "Commission credited successfully", status: "Read", time: "1h ago", isUnread: false },
  ]);

  const markAllRead = () => {
    setItems((prev) =>
      prev.map((item) => ({ ...item, status: "Read", time: "Just now", isUnread: false }))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <Button variant="secondary" onClick={markAllRead}>
          Mark all as read
        </Button>
      </div>
      <Card>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={
                item.isUnread
                  ? "rounded-xl border border-accent-gold/40 bg-brand-green-muted p-3"
                  : "rounded-xl border border-border-subtle p-3"
              }
            >
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-text-muted">
                {item.status} • {item.time}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
