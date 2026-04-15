import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../components/ui/Modal";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Card title="Change Password">
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Current Password" type="password" />
          <Input label="New Password" type="password" />
          <Input label="Confirm Password" type="password" />
        </div>
        <Button className="mt-4" onClick={() => setPasswordModalOpen(true)}>
          Update Password
        </Button>
      </Card>
      <Card title="Session">
        <Button variant="danger" onClick={() => navigate("/login")}>
          Logout
        </Button>
      </Card>
      <Modal open={passwordModalOpen} title="Password Updated" onClose={() => setPasswordModalOpen(false)}>
        <div className="space-y-3 text-sm text-text-secondary">
          <p>Your password was updated successfully. Please use the new password for your next login.</p>
          <Button onClick={() => setPasswordModalOpen(false)}>Done</Button>
        </div>
      </Modal>
    </div>
  );
}
