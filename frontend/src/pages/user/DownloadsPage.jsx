import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

const DOWNLOADS_STORAGE_KEY = "tb_uploaded_documents";
const DEFAULT_FILES = [
  "Complan EN v2.0 - Active",
  "Complan DE v1.3 - Active",
  "Brand Guidelines v1.1 - Archived",
];

export default function DownloadsPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [files, setFiles] = useState(DEFAULT_FILES);

  useEffect(() => {
    const stored = window.localStorage.getItem(DOWNLOADS_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length) {
          setFiles(parsed);
          return;
        }
      } catch {
        // keep defaults
      }
    }
    window.localStorage.setItem(DOWNLOADS_STORAGE_KEY, JSON.stringify(DEFAULT_FILES));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Downloads</h1>
      <Card title="Documents">
        <div className="space-y-3">
          {files.map((file) => (
            <div
              key={file}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-subtle p-3"
            >
              <p className="text-sm">{file}</p>
              <Button
                variant="secondary"
                onClick={() => window.alert(`Download started: ${file}`)}
              >
                Download
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setSelected(file);
                  setOpen(true);
                }}
              >
                Preview
              </Button>
            </div>
          ))}
        </div>
      </Card>
      <Modal open={open} title="Document Preview" onClose={() => setOpen(false)}>
        <p className="text-sm text-text-secondary">{selected}</p>
        <p className="mt-3 text-xs text-text-muted">
          This preview is UI-only and ready for real document integration.
        </p>
      </Modal>
    </div>
  );
}
