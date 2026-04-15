import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function CalculatorPage() {
  const [directReferrals, setDirectReferrals] = useState("20");
  const [depth, setDepth] = useState("10");
  const [activePercent, setActivePercent] = useState("70");
  const [estimate, setEstimate] = useState(4200);

  const handleCalculate = () => {
    const direct = Number(directReferrals || 0);
    const levels = Math.min(Number(depth || 0), 10);
    const activeRate = Math.min(Math.max(Number(activePercent || 0), 0), 100) / 100;
    const value = Math.round(direct * levels * 2 * activeRate * 15);
    setEstimate(value);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Calculator</h1>
      <Card title="Earning Estimator">
        <div className="grid gap-4 md:grid-cols-3">
          <Input
            label="Direct Referrals"
            placeholder="20"
            value={directReferrals}
            onChange={(e) => setDirectReferrals(e.target.value.replace(/\D/g, ""))}
          />
          <Input
            label="Depth (Max 10)"
            placeholder="10"
            value={depth}
            onChange={(e) => setDepth(e.target.value.replace(/\D/g, ""))}
          />
          <Input
            label="Average Active %"
            placeholder="70"
            value={activePercent}
            onChange={(e) => setActivePercent(e.target.value.replace(/\D/g, ""))}
          />
        </div>
        <Button className="mt-4" onClick={handleCalculate}>
          Calculate
        </Button>
      </Card>
      <Card title="Result">
        <p className="text-lg font-semibold text-brand-green">Estimated: ${estimate.toLocaleString()}</p>
        <p className="mt-2 text-sm text-text-secondary">
          Estimate only. Final payout depends on exact unilevel pass-up rules.
        </p>
      </Card>
    </div>
  );
}
