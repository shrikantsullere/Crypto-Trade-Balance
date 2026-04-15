import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#0f3b2f_0%,#144a39_32%,#1a5a45_62%,#205f49_100%)] px-4">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_8%,rgba(201,162,39,.22),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,.10),transparent_40%),radial-gradient(circle_at_50%_64%,rgba(201,162,39,.14),transparent_48%)]" />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md neo-glow">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-accent-gold">Operations Access</p>
            <h1 className="mt-2 text-2xl font-semibold">Admin Login</h1>
          </div>
          <form className="space-y-4" onSubmit={handleAdminLogin}>
            <Input label="Admin Email" placeholder="admin@tradebalance.com" />
            <Input label="Password" type="password" placeholder="********" />
            <Button type="submit" className="w-full">
              Login to Admin Panel
            </Button>
            <p className="text-center text-sm text-text-secondary">
              Member login?{" "}
              <Link to="/login" className="font-semibold text-brand-green">
                Go to User Login
              </Link>
            </p>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
