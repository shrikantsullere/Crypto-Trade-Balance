Lass in der großen Gruppe schreiben
Colours is Rolex Green with Gold
Please i want also see how the prelaunch site will look in Green gold frontpage in my eyes it looks very elegant and classy


@13237206655028 
So website for prelaunch simple but attention grabbing
-Logo should be the LION with the Crown
-Colours White Backround /Black Green Gold
-Headline / Subheadline
-Video maybe we can create one by AI
-Scarcity before Registration Button
-Legal Pages

User Backoffice / Data must be later copied to Main Website
-Complete Genolgy nice design
-Personal Reflink
-Chat funktion
-Download Area for pdfs complan
-Maybe another Landing Page

Complan
-complan it is a Unilevel 10 Levels deep each Level 2 USd with pass up system
(maybe we can do a calculator based about the Sponsering for each member)
-The complan PDF needs maybe a redesign also later in diffrent Lanuguages)



Dino please kümmer dich um ihn



image.png



image.png




Landing me Official Telegram Community (Owner: Christina) section
Post-registration mandatory Telegram onboarding step
Flow update: register ke baad /telegram-onboarding

---

## Current Agreed Build Scope (UI + Flow Alignment)

### User Sidebar (final)
- Dashboard
- My Network
- Referral
- Calculator
- Downloads
- Chat

### Admin Sidebar (final)
- Admin Dashboard
- Users Management
- Referral & Genealogy
- Earnings & Commissions
- Downloads Manager
- Chat/Support Manager

### Login Role Flow
- Login page me role select hoga: `User` / `Admin`
- User login -> `/dashboard`
- Admin login -> `/admin/dashboard`

### Downloads Data Flow (current UI implementation)
- Admin uploads document metadata + PDF file selection in `Admin Downloads`.
- Uploaded list `localStorage` key `tb_uploaded_documents` me save hoti hai.
- User `Downloads` page same key read karke wahi files show karti hai.
- Note: ye UI-level persistence hai; production me backend/storage API se replace hoga.

### Chat Purpose Flow
- User Chat = user directly Admin Support Manager se chat karega.
- Admin Chat = support queue me user select karke uska conversation handle karega.
- WhatsApp-like behavior: left queue, right active chat thread.