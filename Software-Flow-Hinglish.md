# Trade Balance Software Flow (Hinglish Guide)

Ye file simple language me explain karti hai ki software real me kaise work karega:  
**User landing pe aata hai -> register karta hai -> Telegram onboarding complete karta hai -> login/dashboard me sidebar se kaam karta hai.**

---

## 1) User Entry Flow (Public Side)

### Step 1: User website open karta hai
- User browser me website URL open karega.
- Usko **Landing Page** dikhegi (premium theme: white + green + gold, Lion + Crown branding).

### Step 2: Landing pe kya dikhega
- Header: Logo + `Login` + `Register`
- Hero section: headline + subheadline
- Buttons:
  - `Register Now`
  - `Join Telegram`
- Dedicated block: `Official Telegram Community (Owner: Christina)`
- Video section (promo)
- Scarcity section (countdown / limited slots message)
- Footer legal links (Privacy, Terms)

### Step 3: Telegram link ka behavior
- `Join Telegram` pe click karte hi user ko **external Telegram link** par bheja jayega.
- Is action me backend pe account create nahi hota.
- Telegram URL new tab me open karna best rahega.

---

## 2) Register/Login Flow

### Step 4: Register flow
- User `Register Now` pe click karega -> `/register` page open hogi.
- Fields fill karega:
  - Name
  - Email/Phone
  - Password
  - Confirm Password
  - Referral Code (agar link `?ref=CODE` ke saath aaya hai to auto-fill)
- `Create Account` click -> validation -> account create -> redirect to login.

### Step 5: Mandatory Telegram onboarding (new requirement)
- Registration success ke baad user ko direct `/telegram-onboarding` page pe bheja jayega.
- Yaha user ko ye dikhaya jayega:
  - "Account created successfully"
  - "Continue karne ke liye official Telegram group join karo"
  - `Join Telegram Group` button
  - `I Have Joined` confirmation button
- Is step ka purpose: har registered user Telegram community me aa jaye.

### Step 6: Login flow
- User `/login` page pe credentials dalega.
- `Login` click -> successful auth -> redirect `/dashboard`.

> Important: **Login/Register pages par sidebar nahi hota.**  
Sidebar sirf login ke baad dashboard me aata hai.

---

## 3) Dashboard Main Flow (After Login)

Login ke baad app shell open hota hai:
- Left: **Sidebar Menu**
- Top: **Topbar**
- Center: **Main content area**

User sidebar me jis menu pe click karega, center content wahi module ka open hoga.

---

## 4) Sidebar Menu-by-Menu User Journey (Current Final)

## 4.1 Dashboard
- User ko quick summary dikhegi:
  - Total earnings
  - Total referrals
  - Active team/users
  - Recent activity
- Yaha se user quick action le sakta hai (jaise referral page, calculator, downloads).

## 4.2 My Network
- User apni team/genealogy dekhega:
  - Tree view
  - List view (level-wise)
- Search/filter se specific member dekh sakta hai.

## 4.3 Referral
- User ka personal referral link show hoga.
- `Copy` button se link copy hoga.
- User isi link ko share karke new members la sakta hai.

## 4.4 Calculator
- User referral numbers input karega.
- System estimated earning dikhayega (business rules ke basis par).
- Note: Final formula client pass-up rules ke hisaab se lock hogi.

## 4.5 Downloads
- Complan PDFs aur docs ka list hoga.
- User `Download` button se file le sakta hai.

## 4.6 Chat
- User message send/receive karega **Admin Support Manager** ke saath.
- Chat window + input box available rahega.
- User side me direct support channel connected rahega.

---

## 5) Full User Journey (One-Line Flow)

`Landing -> Register -> Telegram Onboarding -> Login -> Dashboard -> Sidebar menu selection -> Module actions -> Logout`

---

## 6) Referral-Based Growth Practical Flow

1. Existing member referral link copy karta hai (`Referral` page se).  
2. New user referral link se landing pe aata hai.  
3. Register page me referral code auto-fill hota hai.  
4. New user account create karta hai.  
5. Network tree me sponsor ke niche add hota hai (as per plan logic).  

---

## 7) Telegram Placement Recommendation

- Landing hero me `Join Telegram` as secondary CTA.
- Optionally footer me bhi Telegram icon/link.
- Label clear hona chahiye: `Join Official Telegram Community`.
- Community owner mention: `Managed by Christina` (trust and clarity ke liye).
- External open behavior:
  - Desktop: new tab
  - Mobile: Telegram app/deep link if installed

### Telegram join verification approach
- Preferred: Telegram bot/deep-link verification.
- Fallback: user self-confirm (`I Have Joined`) + admin later verification.

---

## 8) User-friendly UX Notes

- Har page pe proper spacing (premium clean look).
- Buttons consistent style (green primary, gold accents).
- Form errors clear and simple text me.
- Loading states dikhne chahiye (blank screen nahi).
- Mobile pe sidebar hamburger drawer banega.

---

## 9) Simple Hindi-English Summary

Ye software basically do parts me kaam karega:
- **Public part:** user ko attract karega (landing + telegram + register/login).
- **Private part (dashboard):** user apna network, referral, calculator, downloads, aur chat manage karega.

Is flow se user onboarding smooth rahega aur business referral model clearly run hoga.

---

## 9A) Admin Side bhi hoga (important)

Haan, platform me **admin dashboard** bhi hoga, kyunki user data, referral mapping, earnings, documents, notifications aur verification ko manage karna admin ka kaam hai.

Admin ka high-level flow:

`Admin Login -> Admin Dashboard -> Admin Sidebar Modules -> Action Save + Audit Log`

Admin routes normal user se alag aur protected rahenge (example: `/admin/*`).

---

## 10) User paise kaise kamayega (Earning Logic - simple)

Yaha earning ka core model **referral + network growth** hai:

1. User `Referral` page se apna personal referral link copy karega.  
2. Wo link share karega (WhatsApp/Telegram/social/direct).  
3. Naya member us link se register karega to sponsor mapping hogi.  
4. Network level-wise build hoga (unilevel structure).  
5. Earnings `Earnings` module me visible hongi.

### Client requirement ke hisaab se
- Unilevel: **10 levels deep**
- Amount concept: **$2 per level**
- **Pass-up system** applicable

> Note: Exact payout formula (pass-up calculation examples) client se final sign-off ke baad lock hoga.  
Calculator ka result estimate hoga jab tak formula final nahi hota.

---

## 11) Sidebar me aake user exact kya karega (work purpose)

- `Dashboard`: performance overview dekhna (summary + quick actions)  
- `My Network`: team structure samajhna aur growth monitor karna  
- `Referral`: link copy/share karke new joining lana  
- `Calculator`: future earning estimate check karna  
- `Downloads`: complan/document files lena  
- `Chat`: admin support manager se direct communication  

Iska matlab user ka daily kaam mostly ye hoga:  
**link share karo -> member add karo -> network check karo -> earnings track karo.**

---

## 11A) Admin Sidebar me exact kya hoga (work purpose)

- `Admin Dashboard`: total users, active users, payout summary, pending tasks  
- `Users Management`: search/filter members, account status control, profile inspect  
- `Referral & Genealogy`: full tree review, sponsor mapping verify/correct  
- `Earnings & Commissions`: commission logs, payout approvals/adjustments  
- `Downloads Manager`: PDF/docs upload, version/language manage  
- `Chat/Support Manager`: support conversations monitor/assign  

Admin ka daily kaam:
**users monitor karo -> payouts check karo -> documents publish karo -> support communication manage karo.**

---

## 11B) Data kaha se aayega? (Current UI + Future Backend)

### Current UI-level (abhi implemented)
- Admin Downloads upload list browser `localStorage` me save hoti hai (`tb_uploaded_documents`).
- User Downloads page same key read karke wahi files dikhata hai.
- Chat currently frontend state me simulate hota hai (API connected nahi hai).

### Production backend flow (recommended)
- `GET /api/user/dashboard` -> user dashboard summary data
- `GET /api/user/network` -> genealogy list/tree data
- `GET /api/user/referral-link` -> personal reflink
- `POST /api/user/calculate` or frontend formula -> calculator result
- `GET /api/user/downloads` -> admin uploaded active files
- `GET/POST /api/chat/...` -> user-admin support messages
- `GET /api/admin/users` -> admin user management data
- `GET /api/admin/earnings` + action APIs -> payout decisions
- `POST /api/admin/downloads/upload` -> admin file publish
- `GET /api/admin/chat/conversations` -> support queue

---

## 12) Kya ye Wireframe aur PRD me mention hai?

Haan, ye points dono docs me aligned hain:

- `Wireframe.md` me:
  - Sidebar menu structure
  - Har page ka detail content
  - Dashboard flow and module behavior
  - Calculator/Earnings/Network/Referral sections
  - Admin dashboard structure + admin sidebar modules (updated)

- `PRD.md` me:
  - Functional requirements (FR-07, FR-08, FR-09, FR-10 etc.)
  - Admin functional requirements (role-based access + admin operations modules)
  - Unilevel + pass-up business context mention
  - Scope, acceptance criteria, user flows

Isliye `Software-Flow-Hinglish.md` ab execution-friendly explanation deta hai,  
aur `Wireframe.md` + `PRD.md` uska design + requirement backbone provide karte hain.
