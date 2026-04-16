# Admin Architecture

Frontend: React Admin Panel  
Backend: Node.js (Express)  
DB: MongoDB  

## Layers
- Controller
- Service
- Repository

## Security
- Admin JWT Auth
- Role-based access





# User Dashboard Architecture

## Tech Stack
- Frontend: React.js
- Backend: Node.js (Express)
- DB: MongoDB
- Realtime: Socket.io

## Flow

React UI
 ↓
API Layer
 ↓
Service Layer
 ↓
MongoDB

## Modules
- User Service
- Referral Service
- Earnings Service
- Chat Service

## Realtime
- Chat uses WebSocket
- Notifications via socket