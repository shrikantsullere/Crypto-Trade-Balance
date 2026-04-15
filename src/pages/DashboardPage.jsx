import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function CountUp({ to, prefix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 30;
    const inc = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, 18);
    return () => clearInterval(timer);
  }, [to]);
  return `${prefix}${count.toLocaleString()}`;
}

export default function DashboardPage() {
  const navigate = useNavigate();
  const kpis = [
    { label: "Total Earnings", value: 12480, prefix: "$" },
    { label: "Total Referrals", value: 326, prefix: "" },
    { label: "Active Team", value: 192, prefix: "" },
    { label: "Pending Actions", value: 8, prefix: "" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Christina</h1>
        <p className="text-sm text-text-secondary">Performance overview and quick actions</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
          >
          <Card className="gold-ring">
            <p className="text-sm text-text-secondary">{kpi.label}</p>
            <p className="mt-2 text-2xl font-semibold text-brand-green">
              <CountUp to={kpi.value} prefix={kpi.prefix} />
            </p>
          </Card>
          </motion.div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Recent Activity" className="lg:col-span-2">
          <div className="space-y-3">
            {["New referral joined", "Commission credited", "Document downloaded"].map((item) => (
              <div key={item} className="rounded-xl border border-border-subtle p-3 text-sm">
                <p className="font-medium">{item}</p>
                <p className="text-xs text-text-muted">Today, 10:42 AM</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Quick Actions">
          <div className="space-y-3">
            <Button
              className="w-full"
              onClick={() => {
                const referralLink = "https://tradebalance.com/register?ref=TB-CHRISTINA-001";
                navigator.clipboard?.writeText(referralLink);
                window.alert("Your referral link has been copied. You can now share it with new members.");
              }}
            >
              Copy Referral Link
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                window.alert("Opening earnings calculator.");
                navigate("/calculator");
              }}
            >
              Open Calculator
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                window.alert("Opening downloads so you can access the compensation plan.");
                navigate("/downloads");
              }}
            >
              Download Complan
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
