import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const link = "https://tradebalance.com/register?ref=TB-CHRISTINA-001";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Referral</h1>
      <Card title="Your Referral Link">
        <div className="rounded-xl border border-border-subtle bg-page-bg p-4 font-mono text-sm">
          {link}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button
            onClick={() => {
              navigator.clipboard?.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
          >
            Copy Link
          </Button>
          <AnimatePresence>
            {copied ? (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-sm text-brand-green"
              >
                Link copied successfully.
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </Card>
      <Card title="QR Code (Optional)">
        <div className="flex h-40 w-40 items-center justify-center rounded-xl border border-dashed border-border-subtle text-xs text-text-muted">
          QR Placeholder
        </div>
      </Card>
    </div>
  );
}
