import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function ProfilePage() {
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Profile</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Avatar" className="lg:col-span-1">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-green text-2xl font-semibold text-white">
              C
            </div>
            <Button variant="secondary" onClick={() => setOpenAvatarModal(true)}>
              Change Avatar
            </Button>
          </div>
        </Card>
        <Card title="Account Information" className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Full Name" defaultValue="Christina Hall" />
            <Input label="Email" defaultValue="christina@example.com" />
            <Input label="Phone" defaultValue="+49 123 456 7890" />
            <Input label="Sponsor" defaultValue="TB Leader 001" />
          </div>
          <div className="mt-4 grid gap-3 rounded-xl bg-page-bg p-4 text-sm text-text-secondary md:grid-cols-3">
            <p>Member ID: TB-00294</p>
            <p>Join Date: 08 Apr 2026</p>
            <p>Status: Active</p>
          </div>
          <Button
            className="mt-4"
            onClick={() => {
              setSaveMessage("Profile changes saved.");
              setTimeout(() => setSaveMessage(""), 1800);
            }}
          >
            Save Profile
          </Button>
          {saveMessage ? <p className="mt-2 text-sm text-brand-green">{saveMessage}</p> : null}
        </Card>
      </div>
      <Modal open={openAvatarModal} title="Update Avatar" onClose={() => setOpenAvatarModal(false)}>
        <div className="space-y-3 text-sm text-text-secondary">
          <p>Avatar upload form is ready for API integration. You can keep your current avatar or update it when upload service is enabled.</p>
          <div className="flex gap-2">
            <Button onClick={() => setOpenAvatarModal(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
