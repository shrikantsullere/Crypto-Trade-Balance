import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import PageTransition from "./components/ui/PageTransition";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TelegramOnboardingPage from "./pages/TelegramOnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import MinimalDashboard from "./pages/MinimalDashboard";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import NetworkPage from "./pages/NetworkPage";
import ReferralPage from "./pages/ReferralPage";
import CalculatorPage from "./pages/CalculatorPage";
import DownloadsPage from "./pages/DownloadsPage";
import ChatPage from "./pages/ChatPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AdminLayout from "./components/layout/AdminLayout";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminNetworkPage from "./pages/admin/AdminNetworkPage";
import AdminEarningsPage from "./pages/admin/AdminEarningsPage";
import AdminDownloadsPage from "./pages/admin/AdminDownloadsPage";
import AdminChatPage from "./pages/admin/AdminChatPage";
import { useEffect, useRef } from "react";

export default function App() {
  const location = useLocation();
  const audioRef = useRef(null);
  const withTransition = (node) => <PageTransition>{node}</PageTransition>;

  useEffect(() => {
    // Shared play function
    const tryPlay = () => {
      if (audioRef.current && location.pathname === "/") {
        audioRef.current.play()
          .then(() => console.log("Music Playing"))
          .catch(err => console.log("Music play pending interaction..."));
      }
    };

    // Interaction triggers
    const trigger = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        tryPlay();
      }
    };

    window.addEventListener("click", trigger);
    window.addEventListener("scroll", trigger);
    window.addEventListener("touchstart", trigger);

    // Initial check and route change check
    tryPlay();

    if (location.pathname !== "/") {
      if (audioRef.current) audioRef.current.pause();
    }

    return () => {
      window.removeEventListener("click", trigger);
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, [location.pathname]);

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/bg-music.mp3" 
        loop 
        preload="auto"
        muted
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={withTransition(<LandingPage />)} />
        <Route path="/login" element={withTransition(<LoginPage />)} />
        <Route path="/register" element={withTransition(<RegisterPage />)} />
        <Route path="/telegram-onboarding" element={withTransition(<TelegramOnboardingPage />)} />
        <Route path="/privacy" element={withTransition(<PrivacyPage />)} />
        <Route path="/terms" element={withTransition(<TermsPage />)} />
        <Route path="/admin-login" element={withTransition(<AdminLoginPage />)} />
        <Route path="/verify-email" element={withTransition(<VerifyEmailPage />)} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={withTransition(<DashboardPage />)} />
          <Route path="/network" element={withTransition(<NetworkPage />)} />
          <Route path="/referral" element={withTransition(<ReferralPage />)} />
          <Route path="/calculator" element={withTransition(<CalculatorPage />)} />
          <Route path="/downloads" element={withTransition(<DownloadsPage />)} />
          <Route path="/chat" element={withTransition(<ChatPage />)} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={withTransition(<AdminDashboardPage />)} />
          <Route path="/admin/users" element={withTransition(<AdminUsersPage />)} />
          <Route path="/admin/network" element={withTransition(<AdminNetworkPage />)} />
          <Route path="/admin/earnings" element={withTransition(<AdminEarningsPage />)} />
          <Route path="/admin/downloads" element={withTransition(<AdminDownloadsPage />)} />
          <Route path="/admin/chat" element={withTransition(<AdminChatPage />)} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}
