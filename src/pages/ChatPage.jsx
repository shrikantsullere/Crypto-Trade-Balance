import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { side: "left", text: "Hello Christina, this is Admin Support Manager. How can we help?", time: "10:00 AM" },
    { side: "right", text: "I have completed Telegram onboarding.", time: "10:02 AM" },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { side: "right", text: message.trim(), time }]);
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Chat</h1>
      <Card title="Connected Support">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border-subtle bg-page-bg p-3 text-sm">
          <p><span className="font-medium">Channel:</span> User to Admin Support Manager</p>
          <p className="text-text-secondary">Status: Active</p>
        </div>
      </Card>
      <Card>
        <div className="space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={`${msg.time}-${idx}`}
              className={
                msg.side === "left"
                  ? "max-w-md rounded-2xl bg-brand-green p-3 text-sm text-white"
                  : "ml-auto max-w-md rounded-2xl border border-border-subtle bg-page-bg p-3 text-sm"
              }
            >
              {msg.text}
              <p className={`mt-1 text-xs ${msg.side === "left" ? "text-white/80" : "text-text-muted"}`}>
                {msg.time}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-end gap-3">
          <Input
            className="mb-0"
            placeholder="Type your message to Admin Support..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  );
}
