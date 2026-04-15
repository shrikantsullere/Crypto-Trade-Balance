import {
  ShieldCheck,
  Users,
  Network,
  WalletCards,
  Files,
  MessagesSquare,
} from "lucide-react";

export const adminNavItems = [
  { label: "Admin Dashboard", path: "/admin/dashboard", icon: ShieldCheck },
  { label: "Users Management", path: "/admin/users", icon: Users },
  { label: "Referral & Genealogy", path: "/admin/network", icon: Network },
  { label: "Earnings & Commissions", path: "/admin/earnings", icon: WalletCards },
  { label: "Downloads Manager", path: "/admin/downloads", icon: Files },
  { label: "Chat/Support Manager", path: "/admin/chat", icon: MessagesSquare },
];
