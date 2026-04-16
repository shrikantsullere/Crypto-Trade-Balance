# Admin Database

## Users
{
  memberId,
  name,
  sponsorId,
  status,
  walletBalance
}

## Transactions
{
  txnId,
  userId,
  amount,
  status
}

## Genealogy
{
  userId,
  sponsorId,
  level,
  path
}

## Support
{
  chatId,
  userId,
  messages,
  assignedTo
}





# User Database Schema

## User
{
  memberId,
  name,
  email,
  password,
  sponsorId,
  walletBalance,
  status
}

## Activity Logs
{
  userId,
  type: "referral | earning | download",
  message,
  createdAt
}

## Referral Stats
{
  userId,
  totalReferrals,
  activeTeam
}

## Chat Messages
{
  chatId,
  sender,
  message,
  timestamp
}