# Admin API

GET /api/admin/users
PUT /api/admin/user/:id

GET /api/admin/genealogy
POST /api/admin/genealogy/fix

GET /api/admin/payouts
POST /api/admin/payout/approve
POST /api/admin/payout/reject

POST /api/admin/docs/upload

GET /api/admin/support
POST /api/admin/support/reply





# User API Spec

## Dashboard
GET /api/user/dashboard

Response:
{
  earnings,
  referrals,
  activeTeam,
  pendingActions
}

## Activity
GET /api/user/activity

## Referral
GET /api/referral/link

## Network
GET /api/referral/tree/:userId

## Calculator
POST /api/calculator

## Downloads
GET /api/docs

## Chat
GET /api/chat/:userId
POST /api/chat/send