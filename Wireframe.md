# Trade Balance Platform — Complete Wireframe + Design System

Document version: aligned with `Project-details.md` (Lion + Crown, Rolex Green / Gold, pre-launch + backoffice).

---

## Global design system (premium SaaS)

### Color palette

| Token | Role | Notes |
|--------|------|--------|
| `--bg-page` | App shell background | Off-white `#FAFAF8` or pure white `#FFFFFF` on marketing |
| `--bg-elevated` | Cards, modals, sidebar | White `#FFFFFF` with subtle border or soft shadow |
| `--brand-green` | Primary actions, accents, sidebar active state | Deep Rolex-style green (example: `#0D3B2E`–`#1B4332`; final hex in Figma) |
| `--brand-green-muted` | Hover, secondary fills | Lighter green tint |
| `--accent-gold` | Highlights, icons, dividers, CTA outlines | Muted gold `#C9A227` / `#D4AF37` (not neon) |
| `--text-primary` | Headings, main copy | Near-black `#0A0A0A` |
| `--text-secondary` | Labels, helper text | `#5C5C5C` |
| `--text-muted` | Placeholders, meta | `#8A8A8A` |
| `--border-subtle` | Card/sidebar borders | `#E8E8E4` |
| `--success` / `--warning` / `--error` | Status only | Use sparingly |

**Rules:** White + green + gold as hero; black only for text and thin dividers — not heavy black panels unless intentional dark section on landing.

### Typography

| Level | Use | Example |
|--------|-----|--------|
| Display | Landing hero only | One weight (600–700), tight line-height |
| H1 | Page title inside app | 24–28px desktop |
| H2 | Section titles inside a page | 18–20px |
| Body | Forms, tables | 14–16px, line-height 1.5–1.6 |
| Caption | Table headers, hints | 12–13px, medium color |

**Font:** One sans family for UI (e.g. Inter, DM Sans, or similar); optional distinct display font for landing headline only.

### Spacing scale (8px base)

Use **8px grid**: `4, 8, 12, 16, 24, 32, 40, 48, 64` px.

| Context | Padding / gap |
|---------|----------------|
| Page content area (main) | `24px` mobile → `32–40px` desktop |
| Card internal padding | `20–24px` |
| Between stacked sections | `32–48px` |
| Sidebar item height | Min `44–48px` tap target |
| Form field vertical gap | `16–20px` |
| Topbar height | `56–64px` |

### Components (consistent everywhere)

- **Cards:** Rounded corners `12–16px`, shadow: soft single layer (e.g. `0 1px 3px rgba(0,0,0,0.06)`).
- **Primary button:** Green fill, white text, gold optional thin ring on focus.
- **Secondary button:** Outline green or gold stroke, transparent fill.
- **Inputs:** Full width in forms, height `44–48px`, clear focus ring (green/gold).

### Layout widths

- **Landing:** Max content width `1200px` centered; hero full-bleed optional.
- **Auth pages (login/register):** Single column card `min 360px` / `max 440px` centered.
- **Dashboard:** Sidebar fixed `260–280px` (collapsible to icons `72px` on tablet); main area fluid with max `1400px` inner content optional.
- **Admin dashboard:** Sidebar fixed `280px`; table-first layouts with filters and action bars.

---

## 1. Landing page (public)

### 1.1 Header (sticky optional)

- Logo: Lion + Crown (left).
- Right: text links or ghost buttons **Login** | **Register** (or primary **Register** + secondary **Login**).
- Padding: vertical `16px`, horizontal aligns with grid.
- Background: white or very subtle green tint; bottom border `--border-subtle` if sticky.

### 1.2 Hero

- Headline + subheadline (center or left-aligned per design).
- CTA row: **[Register Now]** (primary) **[Join Telegram]** (secondary/outline).
- Spacing: generous top/bottom `64–96px` desktop.

**Actions:** Register → `/register` · Telegram → external URL.

### 1.3 Video section

- Section title + short line of copy.
- 16:9 container, rounded corners, optional light border; AI promo embed.

### 1.4 Scarcity (above final CTA repeat)

- Countdown timer (labels: days / hours / min / sec).
- Short line: limited slots / closing date (copy from legal/marketing).
- Secondary **Register** optional here.

### 1.5 Footer

- Links: Privacy Policy, Terms (and Imprint if required).
- Small logo or wordmark; muted text.

### 1.6 Telegram community highlight (pre-launch requirement)

- Add a visible landing section: **Official Telegram Community (Owner: Christina)**.
- Primary CTA text: **[Join Official Telegram]**.
- Add helper line: "Registered users should join Telegram group for latest updates."
- CTA behavior: open Telegram invite in new tab (desktop) and deep link/app intent on mobile.

### 1.7 Post-registration Telegram step (mandatory onboarding)

- After successful registration, send user to a **Telegram onboarding step** before normal app journey.
- Screen blocks:
  - Success text: "Account created successfully"
  - Instruction: "Please join official Telegram group to continue"
  - Button: **[Join Telegram Group]**
  - Confirmation: **[I Have Joined]**
- Verification options:
  - Preferred: Telegram bot/deep-link verification
  - Fallback: self-confirm + later admin verification

---

## 2. Registration (`/register`)

**Layout:** No sidebar. Centered card on `--bg-page`.

### Fields (top → bottom)

1. Full name  
2. Email **or** Phone (specify validation rules in build)  
3. Password  
4. Confirm password  
5. Referral code — pre-filled from `?ref=CODE`, editable if policy allows  

### Actions

- **[Create Account]** full width.
- Link: “Already have an account? **Login**” → `/login`.

### Logic

- Client validation → `POST /api/register` → success → route `/telegram-onboarding`.
- On Telegram step completion:
  - If user is not authenticated yet → redirect `/login`
  - If auto-login is enabled → redirect `/dashboard`

### Empty / error states

- Inline errors under fields; API error toast or banner.

---

## 3. Login (`/login`)

**Layout:** No sidebar — login is **outside** the app shell. Only centered panel + branding strip optional.

### Content

- Small logo + product name (optional tagline).
- Email / Phone  
- Password  
- **[Login]**  
- **Forgot password?** (if scope includes → modal or `/forgot-password`)

### Actions

- `POST /api/login` → success → `/dashboard`.

### Note

Sidebar **does not** appear on Login. Sidebar belongs to **Dashboard layout only** (after authentication).

---

## 4. Dashboard shell (after login) — layout

```
┌──────────────┬────────────────────────────────────────────┐
│   SIDEBAR    │  TOPBAR                                     │
│   (fixed)    ├────────────────────────────────────────────┤
│              │                                             │
│   menu       │        MAIN CONTENT (scroll)                │
│   items      │                                             │
│              │                                             │
└──────────────┴────────────────────────────────────────────┘
```

### 4.1 Left sidebar

- Width `260–280px`; background `--bg-elevated` or subtle green tint; right border `--border-subtle`.
- Top: compact logo + “Trade Balance” (or product name).
- Nav list (see §4.3); active item: green bar or gold accent + bold label.
- Bottom optional: user mini card (avatar + name) + **Logout** shortcut (duplicated in Settings).

### 4.2 Topbar

- Left: current page title (matches sidebar selection).
- Right: user menu + logout actions (notification bell removed in current UI).

### 4.3 Sidebar menu — exact order & what each page contains (current)

| # | Route (example) | Label | What appears inside (main content) |
|---|-----------------|-------|-------------------------------------|
| 1 | `/dashboard` | Dashboard | See §5 |
| 2 | `/network` | My Network | See §7 |
| 3 | `/referral` | Referral | See §8 |
| 4 | `/calculator` | Calculator | See §10 |
| 5 | `/downloads` | Downloads | See §11 |
| 6 | `/chat` | Chat | See §12 |

---

## 5. Dashboard (home) — `/dashboard`

**Purpose:** At-a-glance KPIs + recent activity.

### Blocks (top → bottom)

1. **Welcome row:** “Welcome back, {FirstName}” + optional date.
2. **KPI cards (3 in a row desktop, stack mobile):**
   - Total earnings (lifetime) — currency formatted.
   - Total referrals (direct or all per product rule).
   - Active team / active users (define metric with client).
3. **Recent activity:** List/table — e.g. “New referral: @user”, “Commission credited”, “Payout …” with timestamps.
4. **Quick actions (optional):** Copy referral link · Open calculator · Download complan PDF.

**Data:** `GET /api/dashboard`

---

## 6. My Profile — `/profile` (Phase 2 optional, not in current sidebar)

### Sections

1. **Avatar:** Upload / change (optional) or initials in circle.
2. **Personal:** Name, email, phone (read-only or editable per policy).
3. **Account:** Member ID, join date, sponsor name (read-only).
4. **Security shortcut:** Link “Change password” → can scroll to section or go to Settings.

**Action:** Save → `PUT /api/profile` · Success toast.

---

## 7. My Network — `/network`

**Purpose:** Full genealogy; “nice design” per client.

### Tabs

- **Tree view:** Vertical or horizontal tree; zoom/pan if large; node = avatar + name + level badge.
- **List view:** Filter by level (1–10); columns: Name, Level, Join date, Status, Direct refs (as per rules).

### Toolbar

- Search by name / ID.
- Export CSV (optional, if in scope).

**Data:** `GET /api/network?view=tree|list`

---

## 8. Referral — `/referral`

### Content

1. **Your referral link** in monospace or readable box; full URL with `?ref={code}`.
2. **Copy** button + “Copied!” feedback.
3. **QR code** (optional): generate client-side for same URL.
4. Short **how it works** (2–3 bullets).

**Action:** Copy only (no POST).

---

## 9. Earnings — `/earnings` (Phase 2 optional, not in current sidebar)

### Sections

1. **Summary strip:** Total earned · Pending · Paid (if applicable).
2. **Level table:** Columns Level (1–10), Amount earned per level (or count × $2 per business rules), total row.
3. **Transaction history:** Date, type, amount, status, reference id; pagination.

**Data:** `GET /api/earnings`

---

## 10. Calculator — `/calculator`

**Business rule (from client):** Unilevel 10 levels deep, **$2 per level**, **pass-up** — exact formula must be confirmed before implementation.

### UI

- Inputs: e.g. number of direct referrals, depth assumptions, or per-level counts (final UX depends on formula).
- **Calculate** → shows breakdown table + estimated total.
- Disclaimer text: “Estimate only; actual earnings depend on …”

**Logic:** Frontend math from agreed rules, or `POST /api/calculate` if server-side official numbers.

---

## 11. Downloads — `/downloads`

### Content

- List of files: **Compensation plan PDF** (versions / languages when available), other PDFs as added.
- Each row: icon, title, language tag, file size, **[Download]**.
- Optional: preview link in new tab.

---

## 12. Chat — `/chat`

### Layout

- **Left (optional):** conversation list / channels (Support, Team — if multi).
- **Right:** message thread + input; send button; timestamps; read state if supported.

**Action:** Send → WebSocket or `POST /api/chat/messages` + poll/refresh as per stack.

---

## 13. Notifications — `/notifications` (Phase 2 optional, not in current sidebar)

### Content

- List: icon by type, title, body snippet, time, read/unread.
- **Mark all read** · click row → detail or deep link (e.g. earnings detail).

**Data:** `GET /api/notifications` · `PATCH` read state.

---

## 14. Settings — `/settings` (Phase 2 optional, not in current sidebar)

### Sections

1. **Change password:** Current · New · Confirm → `PUT /api/password` or auth endpoint.
2. **Preferences (optional):** Language, email notifications on/off.
3. **Sessions (optional):** Log out other devices.
4. **Logout:** Destructive-styled button → clear session → `/login`.

---

## 15. Global flows

```
Landing → Register → Telegram Onboarding → Login
Landing → Login (role select: User/Admin)
User role → User Dashboard routes
Admin role → Admin Dashboard routes
Any protected URL without session → Login → return URL
```

### Protected routes

All routes under dashboard shell except `/`, `/register`, `/login`, legal pages.
Admin routes (example `/admin/*`) are role-protected and hidden from regular users.

---

## 16. Responsive notes

- **< 768px:** Sidebar → hamburger drawer; topbar shows menu icon; tables scroll horizontal or card list.
- Touch targets min **44px**; no cramped KPI cards.

---

## 17. Implementation checklist (for dev / Figma)

- [ ] Tokens: colors, spacing, radius documented in Figma  
- [ ] Landing + Auth + Dashboard shell with real sidebar labels  
- [ ] Each screen §5–§14 has at least one mid-fidelity frame  
- [ ] Complan math signed off with client before Calculator final UI  
- [ ] Admin shell + menu pages (§18) wireframed with role-based states
- [ ] Admin action modals and audit log UX states designed

---

## 18. Admin dashboard shell (role-protected)

```
┌──────────────┬────────────────────────────────────────────┐
│ ADMIN SIDEBAR│  ADMIN TOPBAR                               │
│ (fixed)      ├────────────────────────────────────────────┤
│              │                                             │
│ menu items   │        ADMIN CONTENT AREA                    │
│              │      (tables, filters, actions)              │
└──────────────┴────────────────────────────────────────────┘
```

### 18.1 Admin sidebar menu — exact order & page content (current)

| # | Route (example) | Label | What appears inside |
|---|-----------------|-------|---------------------|
| 1 | `/admin/dashboard` | Admin Dashboard | Platform KPIs, pending actions, alerts, growth trends |
| 2 | `/admin/users` | Users Management | Member list, search/filter, status controls, profile drilldown |
| 3 | `/admin/network` | Referral & Genealogy | Full tree/list, sponsor mapping checks, anomaly review |
| 4 | `/admin/earnings` | Earnings & Commissions | Commission logs, payout statuses, approval/adjustment actions |
| 5 | `/admin/downloads` | Downloads Manager | Upload/version/language management for PDFs/docs |
| 6 | `/admin/chat` | Chat/Support Manager | Support inbox, assignment, moderation controls |

### 18.2 Admin topbar

- Left: current admin page title + quick breadcrumbs.
- Right: global search, pending alerts, admin profile menu, logout.

### 18.3 Admin UX behavior

- All destructive actions show confirmation modal.
- Table-heavy pages include filters + pagination by default.
- Every sensitive action writes to audit log.

### 18.4 Admin-to-User data flow (downloads)

- Admin `Downloads Manager` me document upload/publish karega.
- User `Downloads` page me wahi published files visible honi chahiye.
- Current UI demo mode: shared browser storage.
- Production mode: common backend document API + file storage (S3/Blob/etc).

---

This wireframe defines navigation, page structure, inner content per sidebar item, design tokens, and spacing for a **premium, consistent** build — ready for Figma and development.
