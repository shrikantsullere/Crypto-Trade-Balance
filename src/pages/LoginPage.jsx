import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleLogin = (event) => {
    event.preventDefault();
    navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#0f3b2f_0%,#144a39_32%,#1a5a45_62%,#205f49_100%)] px-4">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_8%,rgba(201,162,39,.22),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,.10),transparent_40%),radial-gradient(circle_at_50%_64%,rgba(201,162,39,.14),transparent_48%)]" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent-gold/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md neo-glow">
          <Button
            type="button"
            variant="secondary"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            Back
          </Button>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-accent-gold">Welcome Back</p>
            <h1 className="mt-2 text-2xl font-semibold">Login to your account</h1>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="mb-2 block text-sm font-medium text-text-primary">Role</label>
              <select
                className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-sm outline-none focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/20"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Input label="Email or Phone" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="********" />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => navigate(role === "admin" ? "/admin/dashboard" : "/dashboard")}
            >
              Quick Access Login
            </Button>
            <p className="text-center text-sm text-text-secondary">
              New member?{" "}
              <Link to="/register" className="font-semibold text-brand-green">
                Register
              </Link>
            </p>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
