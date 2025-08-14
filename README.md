# E-commerce Frontend Application

## 📝 คำอธิบาย
แอปพลิเคชัน E-commerce Frontend ที่พัฒนาด้วย React + Vite พร้อมฟีเจอร์ครบครัน รองรับการซื้อขาย การจัดการสินค้า การชำระเงิน และระบบผู้ดูแล

## 🚀 เทคโนโลยีที่ใช้

### Frontend Framework
- **React 19.1.1** - JavaScript Library
- **Vite** - Build Tool & Development Server
- **React Router DOM** - Client-side Routing
- **Tailwind CSS 4.1.11** - CSS Framework

### State Management
- **Zustand** - State Management Library
- **React Hook Form** - Form Handling
- **Zod** - Schema Validation

### UI Components & Styling
- **Lucide React** - Icon Library
- **Swiper** - Touch Slider
- **Motion** - Animation Library
- **RC Slider** - Range Slider Component

### Payment & API
- **Stripe** - Payment Processing
- **Axios** - HTTP Client
- **React Toastify** - Notification System

### Utilities
- **Lodash** - JavaScript Utility Library
- **Moment.js** - Date/Time Manipulation
- **Numeral.js** - Number Formatting
- **zxcvbn** - Password Strength Meter
- **React Image File Resizer** - Image Processing

## 📦 การติดตั้ง

### 1. Clone Repository
```bash
git clone <repository-url>
cd ecommerce-frontend
```

### 2. ติดตั้ง Dependencies
```bash
npm install
```

### 3. ตั้งค่า Environment Variables
สร้างไฟล์ `.env` (ถ้าจำเป็น):
```env
VITE_API_URL=https://ecom-api-pearl.vercel.app/api
VITE_STRIPE_PUBLIC_KEY=pk_test_51RvJlxLKCLGMJwEhdYyBkDbgOpAlGZVdhaMHEm3GuXMRVY0wN4shtBrncYEB6Liz2Yuwp3v3DDT2SDm6b409j2PY00dojrQptz
```

### 4. รันโปรเจค
```bash
npm run dev
```

แอปพลิเคชันจะทำงานที่ `http://localhost:5173`

### 5. Build สำหรับ Production
```bash
npm run build
```

## 🏗️ โครงสร้างโปรเจค

```
src/
├── api/                    # API Services
│   ├── auth.jsx           # Authentication APIs
│   ├── product.jsx        # Product APIs
│   ├── user.jsx           # User APIs
│   ├── admin.jsx          # Admin APIs
│   ├── Categoty.jsx       # Category APIs
│   └── stripe.jsx         # Payment APIs
├── components/            # React Components
│   ├── admin/             # Admin Components
│   ├── card/              # Card Components
│   ├── home/              # Home Components
│   ├── CheckOutForm.jsx   # Stripe Checkout
│   └── MainNav.jsx        # Navigation
├── Layouts/               # Layout Components
│   ├── Layout.jsx         # Main Layout
│   ├── LayoutAdmin.jsx    # Admin Layout
│   └── LayoutUser.jsx     # User Layout
├── pages/                 # Page Components
│   ├── admin/             # Admin Pages
│   ├── auth/              # Authentication Pages
│   ├── user/              # User Pages
│   ├── Home.jsx           # Homepage
│   ├── Shop.jsx           # Shop Page
│   └── Cart.jsx           # Cart Page
├── routes/                # Routing Configuration
│   ├── AppRoutes.jsx      # Main Routes
│   ├── ProtectRouteUser.jsx
│   └── ProtectRouteAdmin.jsx
├── store/                 # State Management
│   └── econ-store.jsx     # Zustand Store
└── utils/                 # Utility Functions
    ├── dateformat.jsx     # Date Formatting
    ├── numder.jsx         # Number Formatting
    └── SwiperShowProduct.jsx
```

## 🎯 ฟีเจอร์หลัก

### 👥 User Features
- **หน้าแรก** - แสดงสินค้าขายดีและสินค้าใหม่
- **ร้านค้า** - ดูสินค้าทั้งหมด พร้อมการค้นหาและกรองสินค้า
- **ตะกร้าสินค้า** - เพิ่ม/ลบ/แก้ไขจำนวนสินค้า
- **การชำระเงิน** - ใช้ Stripe สำหรับการชำระเงิน
- **ประวัติการสั่งซื้อ** - ดูรายการคำสั่งซื้อทั้งหมด
- **ระบบสมาชิก** - สมัครสมาชิก/เข้าสู่ระบบ

### 🛠️ Admin Features
- **Dashboard** - หน้าควบคุมหลัก
- **จัดการผู้ใช้** - เปลี่ยนสิทธิ์และสถานะผู้ใช้
- **จัดการหมวดหมู่** - เพิ่ม/ลบหมวดหมู่สินค้า
- **จัดการสินค้า** - เพิ่ม/แก้ไข/ลบสินค้า พร้อมอัปโหลดรูปภาพ
- **จัดการคำสั่งซื้อ** - อัปเดตสถานะคำสั่งซื้อ

## 🔐 การจัดการ Authentication

### User Roles
- **user** - ผู้ใช้ทั่วไป
- **admin** - ผู้ดูแลระบบ

### Protected Routes
- `/user/*` - ต้องเข้าสู่ระบบ (user role)
- `/admin/*` - ต้องเข้าสู่ระบบ (admin role)

## 🛍️ การทำงานของระบบ

### ระบบตะกร้าสินค้า
- ใช้ Zustand สำหรับจัดเก็บข้อมูลตะกร้า
- รองรับการเพิ่ม/ลบ/อัปเดตจำนวนสินค้า
- คำนวณราคารวมแบบ Real-time

### ระบบการค้นหา
- ค้นหาตามชื่อสินค้า
- กรองตามหมวดหมู่
- กรองตามช่วงราคา (Range Slider)

### ระบบการชำระเงิน
- ใช้ Stripe Elements สำหรับ UI การชำระเงิน
- รองรับการชำระเงินแบบปลอดภัย
- อัปเดตสถานะคำสั่งซื้อแบบ Real-time

## 📱 Responsive Design
- รองรับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- ใช้ Tailwind CSS Breakpoints
- Swiper รองรับ Touch Gestures

## 🎨 UI/UX Features
- **Animations** - ใช้ Motion library
- **Loading States** - Spinner และ Loading indicators
- **Toast Notifications** - แจ้งเตือนผู้ใช้
- **Image Optimization** - Resize รูปภาพอัตโนมัติ
- **Password Strength** - แสดงความแข็งแรงของรหัสผ่าน

## 🔧 การ Development

### Available Scripts
```bash
npm run dev          # รัน development server
npm run build        # Build สำหรับ production  
npm run lint         # ตรวจสอบ code quality
npm run preview      # Preview production build
```

### ESLint Configuration
- ใช้ ESLint สำหรับ code quality
- รองรับ React Hooks และ React Refresh
- กำหนดกฎการใช้งาน Variables

### Vite Configuration
- ใช้ Vite plugin สำหรับ React
- รองรับ Tailwind CSS integration
- Hot Module Replacement (HMR)

## 🌐 API Integration
แอปพลิเคชันเชื่อมต่อกับ Backend API ที่ `https://ecom-api-pearl.vercel.app/api`

### API Endpoints ที่ใช้
- **Authentication**: `/register`, `/login`, `/current-user`
- **Products**: `/products`, `/product`, `/search/filters`
- **Categories**: `/category`
- **Cart**: `/user/cart`
- **Orders**: `/user/order`, `/admin/orders`
- **Payment**: `/user/create-payment-intent`
- **Image Upload**: `/images`, `/removeimages`

## 🚀 Deploy

### Deploy บน Vercel
```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

ไฟล์ `vercel.json` ได้ถูกตั้งค่าไว้แล้วสำหรับ SPA routing

### Build Optimization
- Vite ทำการ optimize build อัตโนมัติ
- Code splitting สำหรับ lazy loading
- Asset compression และ minification

## 💳 Stripe Payment Setup
1. สร้างบัญชี Stripe (Test Mode)
2. ดึง Publishable Key มาใส่ในโค้ด
3. ตั้งค่า Webhook endpoints (ถ้าจำเป็น)

## 📝 การใช้งาน

### สำหรับผู้ใช้ทั่วไป:
1. เข้าไปที่หน้าแรก
2. เลือกดูสินค้าในหน้า Shop
3. เพิ่มสินค้าในตะกร้า
4. ไปที่หน้า Checkout
5. กรอกที่อยู่และทำการชำระเงิน

### สำหรับ Admin:
1. เข้าสู่ระบบด้วย admin account
2. จัดการหมวดหมู่สินค้า
3. เพิ่ม/แก้ไขสินค้า
4. จัดการคำสั่งซื้อและผู้ใช้

## 🔍 การ Debug
- ใช้ React Developer Tools
- ตรวจสอบ Network tab สำหรับ API calls
- ดู Console logs สำหรับ errors

## 📄 License
MIT License

## 🤝 Contributing
1. Fork repository
2. สร้าง feature branch
3. Commit changes
4. Push ไปยัง branch
5. สร้าง Pull Request

---

**หมายเหตุ**: แอปพลิเคชันนี้เป็น Demo สำหรับการเรียนรู้ กรุณาอย่าใช้ข้อมูลบัตรเครดิตจริงในระบบ Stripe Test Mode
