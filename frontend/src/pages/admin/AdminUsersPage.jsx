import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function AdminUsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState("");
  const users = [
    { id: "TB-10021", name: "Aarav Singh", status: "Active", sponsor: "TB-CHRISTINA-001" },
    { id: "TB-10058", name: "Nina Roy", status: "Pending", sponsor: "TB-ALEX-205" },
    { id: "TB-10114", name: "Milan Shah", status: "Suspended", sponsor: "TB-CHRISTINA-001" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Users Management</h1>
      <Card>
        <div className="grid gap-3 md:grid-cols-4">
          <Input label="Search by name / ID" placeholder="TB-10021" />
          <Input label="Status" placeholder="Active / Pending" />
          <Input label="Sponsor ID" placeholder="TB-CHRISTINA-001" />
          <Button className="self-end md:w-fit" onClick={() => window.alert("User filters applied.")}>
            Apply Filters
          </Button>
        </div>
      </Card>

      <Card title="Members">
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle text-xs uppercase tracking-wide text-text-muted">
                <th className="px-3 py-2">Member ID</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Sponsor</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((row) => (
                <tr key={row.id} className="border-b border-border-subtle/70">
                  <td className="px-3 py-3">{row.id}</td>
                  <td className="px-3 py-3">{row.name}</td>
                  <td className="px-3 py-3">{row.status}</td>
                  <td className="px-3 py-3">{row.sponsor}</td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSelectedUser(row);
                          setModalType("view");
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSelectedUser(row);
                          setModalType("update");
                        }}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        open={Boolean(selectedUser)}
        title={modalType === "update" ? "Update Member Status" : "Member Details"}
        onClose={() => {
          setSelectedUser(null);
          setModalType("");
        }}
      >
        {selectedUser ? (
          <div className="space-y-3 text-sm text-text-secondary">
            <p><span className="font-semibold text-text-primary">Member ID:</span> {selectedUser.id}</p>
            <p><span className="font-semibold text-text-primary">Name:</span> {selectedUser.name}</p>
            <p><span className="font-semibold text-text-primary">Status:</span> {selectedUser.status}</p>
            <p><span className="font-semibold text-text-primary">Sponsor:</span> {selectedUser.sponsor}</p>
            {modalType === "update" ? (
              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => {
                    window.alert(`Status updated for ${selectedUser.id}.`);
                    setSelectedUser(null);
                    setModalType("");
                  }}
                >
                  Confirm Update
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedUser(null);
                    setModalType("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
