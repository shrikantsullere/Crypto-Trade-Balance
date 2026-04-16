import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const DOWNLOADS_STORAGE_KEY = "tb_uploaded_documents";
const DEFAULT_FILES = [
  "Complan EN v2.0 - Active",
  "Complan DE v1.3 - Active",
  "Brand Guidelines v1.1 - Archived",
];

export default function AdminDownloadsPage() {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [version, setVersion] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleUpload = () => {
    if (!selectedFile) {
      window.alert("Please select a PDF file to upload.");
      return;
    }
    const ext = selectedFile.name.toLowerCase();
    if (!ext.endsWith(".pdf")) {
      window.alert("Only PDF files are allowed.");
      return;
    }

    const fileLabel = `${title || "Untitled Document"} ${language || "EN"} ${version || "v1.0"} - Active (${selectedFile.name})`;
    const updatedFiles = [fileLabel, ...files];
    setFiles(updatedFiles);
    window.localStorage.setItem(DOWNLOADS_STORAGE_KEY, JSON.stringify(updatedFiles));
    setTitle("");
    setLanguage("");
    setVersion("");
    setSelectedFile(null);
    window.alert("PDF uploaded and published successfully.");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Downloads Manager</h1>
      <Card title="Upload Document">
        <div className="grid gap-3 md:grid-cols-4">
          <Input
            label="Title"
            placeholder="Compensation Plan v2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Language"
            placeholder="English"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <Input
            label="Version"
            placeholder="v2.0"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
          <div className="space-y-1">
            <label className="text-sm font-medium text-text-primary">Select PDF File</label>
            <input
              type="file"
              accept=".pdf,application/pdf"
              className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2 text-sm"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <p className="text-xs text-text-muted">{selectedFile ? selectedFile.name : "No file selected"}</p>
          </div>
          <Button className="self-end md:w-fit" onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </Card>
      <Card title="Published Files">
        <div className="space-y-3 text-sm">
          {files.map((file) => (
            <div key={file} className="rounded-xl border border-border-subtle p-3">
              {file}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
