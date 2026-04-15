# Product Requirements Document (PRD)

## Project
Trade Balance Platform (Pre-Launch Website + User Backoffice)

## Version
v1.0

## Objective
Build a premium pre-launch website and a secure user backoffice for referral-driven growth, genealogy visibility, earnings tracking, downloads, and member engagement.

## Business Context
- Brand direction: Lion + Crown identity.
- Visual tone: elegant, premium, clean.
- Color direction from client: White + Green + Gold (+ black for typography).
- Initial focus: pre-launch acquisition and member onboarding.
- Future requirement: backoffice data should be portable/migratable to main website.

---

## 1) Product Goals
- Capture and convert pre-launch traffic into registrations.
- Provide authenticated member area for referral operations.
- Provide role-based admin area for operations and platform control.
- Show structured network (genealogy) and earnings visibility.
- Offer compensation-plan downloads and communication tools (chat/notifications).
- Maintain premium visual consistency across web app.

## 2) Non-Goals (for MVP)
- No advanced AI video generation pipeline inside app (video can be embedded externally).
- No complex payout engine automation unless explicitly approved.
- No full multilingual app UI in MVP (PDF multilingual support can be phase 2).

---

## 3) Target Users
- Prospects visiting public landing page.
- Registered members using referral/network features.
- Admin/operations team (indirect) reviewing growth and member data in backend systems.

---

## 4) Scope

### 4.1 In Scope (MVP + Core Backoffice)
1. Public landing page.
2. Register and login flows.
3. Authenticated dashboard shell (sidebar + topbar + content).
4. Backoffice modules:
   - Dashboard
   - My Profile
   - My Network (genealogy)
   - Referral
   - Earnings
   - Calculator
   - Downloads
   - Chat
   - Notifications
   - Settings
5. Admin dashboard shell (role-protected) with operations modules:
   - Admin Dashboard
   - Users Management
   - Referral & Genealogy Management
   - Earnings & Commissions Control
   - Telegram Onboarding Verification
   - Downloads/Documents Management
   - Chat/Support Management
   - Notifications/Broadcast Management
   - Settings & Roles
6. Legal pages (Privacy Policy, Terms).

### 4.2 Phase 2 / Optional
- Additional landing page variants.
- Complan PDF redesign and multi-language assets.
- Advanced analytics and exports.
- Expanded chat capabilities and moderation tools.

---

## 5) Brand & Design Requirements

### 5.1 Visual Identity
- Logo usage: Lion + Crown.
- Theme: premium SaaS look.
- Primary colors:
  - Green: deep Rolex-style green (primary actions/highlights).
  - Gold: muted premium gold (accents/badges/dividers).
  - White/off-white: main surfaces.
  - Black/near-black: text only.

### 5.2 UX Rules
- 8px spacing system.
- Clear hierarchy in typography.
- Generous whitespace; no clutter.
- Sidebar appears only after login (inside dashboard shell).
- Login/register pages remain outside app shell (no sidebar).

---

## 6) Functional Requirements

### FR-01 Landing Page (Public)
- Header with logo and CTA buttons (Login, Register).
- Hero section with headline, subheadline, CTA actions.
- Join Telegram button (external link).
- Dedicated Telegram community block: "Official Telegram Community (Owner: Christina)".
- Promo video section (embed-ready).
- Scarcity section (countdown + limited slots messaging).
- Footer with legal links.

### FR-02 Registration
- Fields: full name, email/phone, password, confirm password, referral code.
- Referral code auto-fill from URL query `?ref=CODE`.
- Client-side and server-side validation.
- Successful registration redirects to Telegram onboarding step first.

### FR-02A Telegram Onboarding (Post Registration)
- Mandatory step after registration: user must be prompted to join official Telegram group.
- Screen must contain:
  - Join button (Telegram invite URL)
  - Confirmation action ("I Have Joined")
- Preferred verification: Telegram bot/deep-link verification.
- Fallback verification: self-confirmation + admin/backoffice validation if strict verification is not feasible.
- After completion, user continues to login/dashboard flow.

### FR-03 Login
- Fields: email/phone and password.
- Successful login creates authenticated session and redirects to dashboard.
- Protected routes redirect unauthenticated users to login.

### FR-04 Dashboard Shell
- Left sidebar with defined menu items.
- Topbar with page title + user controls.
- Main content area with responsive behavior.

### FR-05 Dashboard Home
- KPI cards: total earnings, total referrals, active users/team.
- Recent activity feed.
- Quick actions for common tasks.

### FR-06 My Profile
- View/edit personal profile data.
- Display key member account attributes (member ID, join date, sponsor).

### FR-07 My Network (Genealogy)
- Tree view and list view.
- Level-wise structure display.
- Search/filter support.

### FR-08 Referral
- Display personal referral link.
- Copy-to-clipboard action with feedback.
- Optional QR display (if included in implementation).

### FR-09 Earnings
- Earnings summary.
- Level-wise earnings table.
- Transaction history with timestamp/status.

### FR-10 Calculator
- Input-based earning estimation.
- Business logic based on unilevel plan (10 levels, $2 each level, pass-up concept).
- Clear disclaimer that estimates may vary.

### FR-11 Downloads
- Download area for complan PDFs and related documents.
- File metadata display (title/language/version where available).

### FR-12 Chat
- In-app chat interface with input and send flow.
- Message list with timestamp display.

### FR-13 Notifications
- Notification list with read/unread handling.
- Basic actions: open, mark read, mark all read (if included).

### FR-14 Settings
- Change password.
- Logout.
- Optional preference controls.

### FR-15 Admin Authentication & Authorization
- Admin login uses role-based access control.
- Non-admin users cannot access admin routes.
- Admin session and permissions must be auditable.

### FR-16 Admin Dashboard Home
- KPIs: total users, active users, registrations trend, referral growth, payout summary.
- Quick ops tiles: pending verifications, unread support tickets, latest system alerts.

### FR-17 Users Management (Admin)
- List/search/filter members by status, date, sponsor, activity.
- Open member profile, enable/disable account, reset password (policy-based), view member timeline.

### FR-18 Referral & Genealogy Management (Admin)
- Full tree/list with operational controls.
- Validate/correct sponsor mapping (with audit log).
- Investigate network anomalies and level distribution.

### FR-19 Earnings & Commissions Control (Admin)
- View level-wise commission logs and transaction status.
- Approve/reject/manual adjust payouts (policy-controlled).
- Maintain audit trail for every adjustment action.

### FR-20 Telegram Onboarding Verification (Admin)
- Queue of users pending Telegram join verification.
- Mark verified/rejected with remarks.
- Support fallback self-confirmation review flow.

### FR-21 Content/Downloads/Communication Ops (Admin)
- Upload/manage downloadable files (title, language, version).
- Create/manage notification broadcasts.
- Manage support chat queues or moderation panels.

### FR-22 Roles & Platform Settings (Admin)
- Roles: Super Admin, Ops Admin, Support Admin (minimum).
- Permission-based module visibility and action control.
- Platform-level settings and security preferences.

---

## 7) Information Architecture (Post-login)
- Dashboard
- My Profile
- My Network
- Referral
- Earnings
- Calculator
- Downloads
- Chat
- Notifications
- Settings

### 7.1 Information Architecture (Admin)
- Admin Dashboard
- Users Management
- Referral & Genealogy
- Earnings & Commissions
- Telegram Verification
- Downloads Manager
- Chat/Support Manager
- Notifications Manager
- Roles & Settings

---

## 8) Core User Flows

### Flow A: Visitor to Member
Landing -> Register -> Telegram Onboarding -> Login -> Dashboard

### Flow B: Existing Member
Landing/Login -> Login -> Dashboard

### Flow C: Referral Acquisition
User opens `/?ref=CODE` or registration URL with referral -> Code auto-filled -> Register -> Telegram Onboarding -> User linked to sponsor/ref network -> Login/Dashboard

### Flow D: Admin Operations
Admin Login -> Admin Dashboard -> Module action (users/referrals/earnings/docs/notifications) -> Audit log saved

---

## 9) Data & Backend Expectations
- Persist users, referral relationships, genealogy levels, earnings events, documents metadata, chat messages, notifications.
- APIs should support dashboard module reads and profile/settings updates.
- Data structure should support later migration to main website.
- Persist admin action logs (who, what, when, before/after where applicable).
- Support role-based APIs for admin modules and restricted operations.

---

## 10) Non-Functional Requirements

### Performance
- Landing should load quickly on mobile networks.
- Dashboard pages should feel responsive with loading states.

### Security
- Secure authentication/session handling.
- Password hashing and safe credential practices.
- Route protection for authenticated modules.
- Role-based authorization for admin features.
- Audit logging for sensitive admin actions (payout edits, user status changes, mapping corrections).

### Reliability
- Graceful API error messages.
- Retry/empty states for network failures.

### Accessibility
- Adequate contrast for green/gold on white.
- Keyboard navigability and focus indicators.

### Responsiveness
- Mobile-first compatibility:
  - Sidebar collapses to drawer on small screens.
  - Tables and dense data layouts remain readable.

---

## 11) Dependencies
- Finalized compensation-plan formula for calculator and earnings interpretation.
- Legal content for Privacy/Terms pages.
- Approved branding assets (logo variants, icon set, final color values).
- Document assets for Downloads section.

---

## 12) Risks & Mitigations
- Risk: ambiguity in pass-up calculation rules.  
  Mitigation: obtain signed business logic examples before implementation lock.

- Risk: inconsistent visuals if colors/spacing are not tokenized.  
  Mitigation: enforce design tokens from start.

- Risk: future migration complexity.  
  Mitigation: define normalized schema and stable IDs early.

---

## 13) Acceptance Criteria (MVP Exit)
1. Public landing with all required sections and legal links is live.
2. Registration + login works end-to-end with validation.
3. Authenticated users can navigate all sidebar modules.
4. Referral link is generated and copy action works.
5. Network, earnings, downloads, and profile modules render real or integrated API data.
6. Settings supports password change and logout.
7. UI follows premium green-gold-white theme with consistent spacing.
8. Mobile layout is usable for core flows.
9. Admin can access role-protected dashboard and manage users/referrals/earnings/docs/notifications.
10. Sensitive admin actions are permission-gated and auditable.

---

## 14) Suggested Delivery Phases

### Phase 1 (Foundation)
- Landing, legal, auth, dashboard shell.

### Phase 2 (Core Business)
- Profile, referral, network, earnings, downloads, calculator.

### Phase 3 (Engagement + Polish)
- Chat, notifications, performance/accessibility improvements, final UI polish.

### Phase 4 (Admin Ops Hardening)
- Role matrix finalization and permission controls.
- Audit logs, moderation tooling, and reporting/export for operations.

---

## 15) Open Questions (Need Client Confirmation)
1. Exact pass-up formula examples for levels 1-10.
2. Whether referral code is editable on registration.
3. Exact “active users” KPI definition.
4. Chat scope: member-to-member, member-to-support, or both.
5. Multi-language rollout timeline for complan PDFs.

---

## Final Statement
This PRD defines a complete, premium, referral-focused web platform aligned with the client’s branding and feature expectations, and is ready for design, engineering planning, and phased implementation.
