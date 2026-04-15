import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function AdminSettingsPage() {
  const [rolesModal, setRolesModal] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Roles & Settings</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Role Controls">
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-border-subtle p-3">Super Admin - Full access</div>
            <div className="rounded-xl border border-border-subtle p-3">Ops Admin - Users, earnings, reports</div>
            <div className="rounded-xl border border-border-subtle p-3">Support Admin - Chat, notifications</div>
          </div>
          <Button className="mt-4" onClick={() => setRolesModal(true)}>
            Manage Roles
          </Button>
        </Card>
        <Card title="Security Settings">
          <div className="space-y-3">
            <Input label="Session timeout (minutes)" defaultValue="30" />
            <Input label="2FA policy" defaultValue="Required for Super Admin" />
            <Button onClick={() => window.alert("Security settings saved.")}>Save Security Settings</Button>
          </div>
        </Card>
      </div>

      <Modal open={rolesModal} title="Role Management" onClose={() => setRolesModal(false)}>
        <div className="space-y-3 text-sm text-text-secondary">
          <p>Role permissions editor opens here for Super Admin, Ops Admin, and Support Admin.</p>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                window.alert("Role permission changes saved.");
                setRolesModal(false);
              }}
            >
              Save Role Changes
            </Button>
            <Button variant="secondary" onClick={() => setRolesModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
