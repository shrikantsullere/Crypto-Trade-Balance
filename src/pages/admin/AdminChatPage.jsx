import { useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function AdminChatPage() {
  const supportQueue = [
    { id: "TB-10021", name: "Aarav Singh", status: "Unassigned", lastMessage: "Need help with referral credit." },
    { id: "TB-10058", name: "Nina Roy", status: "Assigned to Ops", lastMessage: "Telegram verification pending." },
    { id: "TB-10114", name: "Milan Shah", status: "Waiting user reply", lastMessage: "Password reset completed." },
  ];
  const [activeUserId, setActiveUserId] = useState(supportQueue[0].id);
  const [reply, setReply] = useState("");
  const [messages, setMessages] = useState({
    "TB-10021": [
      { side: "left", text: "User: I cannot see referral earning." },
      { side: "right", text: "Admin: We are checking your last payout cycle." },
    ],
    "TB-10058": [
      { side: "left", text: "User: Telegram verification still pending." },
      { side: "right", text: "Admin: We are reviewing your proof now." },
    ],
    "TB-10114": [
      { side: "left", text: "User: Thanks for password reset." },
      { side: "right", text: "Admin: You're welcome. Please confirm login." },
    ],
  });

  const activeUser = useMemo(
    () => supportQueue.find((item) => item.id === activeUserId),
    [activeUserId]
  );

  const sendReply = () => {
    if (!reply.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [activeUserId]: [...(prev[activeUserId] || []), { side: "right", text: `Admin: ${reply.trim()}` }],
    }));
    setReply("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Chat/Support Manager</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Support Queue">
          <div className="space-y-3 text-sm">
            {supportQueue.map((ticket) => (
              <button
                key={ticket.id}
                type="button"
                onClick={() => setActiveUserId(ticket.id)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  activeUserId === ticket.id
                    ? "border-accent-gold bg-brand-green-muted"
                    : "border-border-subtle hover:bg-page-bg"
                }`}
              >
                <p className="font-medium">{ticket.name} ({ticket.id})</p>
                <p className="text-xs text-text-secondary">{ticket.status}</p>
              </button>
            ))}
          </div>
        </Card>
        <Card title="Conversation" className="lg:col-span-2">
          <div className="mb-3 rounded-xl border border-border-subtle bg-page-bg p-3 text-xs text-text-secondary">
            Active chat: {activeUser?.name} ({activeUser?.id}) - {activeUser?.status}
          </div>
          <div className="mb-4 space-y-2 text-sm">
            {(messages[activeUserId] || []).map((msg, idx) => (
              <div
                key={`${activeUserId}-${idx}`}
                className={msg.side === "left" ? "rounded-xl bg-brand-green-muted p-3" : "rounded-xl bg-brand-green p-3 text-white"}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Input
              label="Reply"
              placeholder={`Reply to ${activeUser?.name || "user"}`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <Button className="self-end" onClick={sendReply}>
              Send
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
