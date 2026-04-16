import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";

export default function AdminNotificationsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("send");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Notifications Manager</h1>
      <Card title="Create Broadcast">
        <div className="space-y-3">
          <Input label="Title" placeholder="Maintenance Notice" />
          <Input label="Audience" placeholder="All members / Level 1 only" />
          <Input label="Message" placeholder="Platform update tonight at 11 PM UTC" />
          <div className="flex gap-3">
            <Button
              onClick={() => {
                setMode("send");
                setModalOpen(true);
              }}
            >
              Send Now
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setMode("schedule");
                setModalOpen(true);
              }}
            >
              Schedule
            </Button>
          </div>
        </div>
      </Card>
      <Card title="Recent Broadcasts">
        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-border-subtle p-3">Launch reminder - Sent - 84% read</div>
          <div className="rounded-xl border border-border-subtle p-3">Policy update - Scheduled - Tomorrow 10 AM</div>
        </div>
      </Card>

      <Modal
        open={modalOpen}
        title={mode === "send" ? "Confirm Broadcast Send" : "Confirm Broadcast Schedule"}
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4 text-sm text-text-secondary">
          <p>
            {mode === "send"
              ? "This broadcast will be sent immediately to the selected audience."
              : "This broadcast will be added to the scheduling queue."}
          </p>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                window.alert(mode === "send" ? "Broadcast sent successfully." : "Broadcast scheduled successfully.");
                setModalOpen(false);
              }}
            >
              Confirm
            </Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
