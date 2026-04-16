import {
  LayoutDashboard,
  Network,
  Link2,
  Calculator,
  Download,
  MessageCircle,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "My Network", path: "/network", icon: Network },
  { label: "Referral", path: "/referral", icon: Link2 },
  { label: "Calculator", path: "/calculator", icon: Calculator },
  { label: "Downloads", path: "/downloads", icon: Download },
  { label: "Chat", path: "/chat", icon: MessageCircle },
];
