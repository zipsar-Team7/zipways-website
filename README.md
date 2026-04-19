# 🚀 NPathways | Comprehensive Career Exploration Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)

**NPathways** is a premium, state-of-the-art career guidance and education management platform. It bridge the gap between students, parents, and schools by providing specialized bootcamps, assessments, and structured educational pathways through a minimalist, high-conversion user interface.

---

## 🏗️ Project Structure

The project follows a modular React architecture designed for scalability and maintainability.

```text
npathways-website/
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── assets/             # Global images, logos, and media
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Auth-related guards and forms
│   │   ├── bootcamp/       # Calendar, Map, and Card components
│   │   ├── common/         # Buttons, Inputs, Loading screens
│   │   ├── dashboard/      # Dashboard-specific UI
│   │   ├── ecommerce/      # Cart, Product cards, Checkout
│   │   └── layout/         # Header, Footer, Page wrappers
│   ├── context/            # React Context (Auth, Cart, Theme)
│   ├── data/               # Mock JSON data and helper functions
│   ├── lib/                # Third-party library configurations
│   ├── pages/              # Page-level components
│   │   ├── auth/           # Login, Register
│   │   ├── dashboard/      # User Hub, My Files, Profile
│   │   ├── ecommerce/      # Shop, Categories, Product Details
│   │   ├── legal/          # Privacy, Terms, Refunds
│   │   └── public/         # Home, About, Services, Contact
│   ├── styles/             # Global CSS and Design Tokens
│   ├── App.jsx             # Root Component & Routing
│   ├── main.jsx            # Entry point
│   └── routes.jsx          # Route definitions
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

---

## 🛠️ Setup & Installation

Follow these steps to get the development environment running locally.

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/npathways-website.git
   cd npathways-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 🚀 Deployment

The project is optimized for modern cloud hosting platforms like **Vercel**, **Netlify**, or **AWS Amplify**.

### Production Build
To create a production-ready bundle, run:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### Deployment Steps (Vercel/Netlify)
1. Push your code to a GitHub repository.
2. Connect the repository to your hosting provider.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy!

---

## 🌟 Key Features

### 1. **Interactive Bootcamp Hub**
- **Map View**: Integrated Leaflet map to locate offline bootcamps.
- **Calendar View**: Visual schedule management using `date-fns`.
- **Filtering**: Seamlessly toggle between Online and Offline sessions.

### 2. **E-Commerce Engine**
- **Dynamic Shop**: Browse assessments, programs, and pathways.
- **Cart System**: Real-time cart management with local persistence.
- **Secure Checkout**: Multi-step payment information and order summary.

### 3. **Secure Dashboard**
- **Protected Routes**: Authenticated user area using React Context.
- **File Management**: Dedicated section for user-specific educational resources.
- **Profile Hub**: Manage user details and order history.

### 4. **Modern Design System**
- **Minimalist Aesthetic**: High-contrast B&W theme for focus and clarity.
- **Responsive**: Fully optimized for Desktop, Tablet, and Mobile.
- **Micro-animations**: Smooth transitions and loading states for premium feel.

---

## 🧪 Tech Stack

- **Frontend**: React 19, Vite 7
- **Routing**: React Router 7
- **Styling**: Vanilla CSS (CSS Modules approach)
- **Maps**: Leaflet & React Leaflet
- **Icons**: React Icons (Lucide, FontAwesome)
- **Utilities**: date-fns, prop-types

---

## 📜 License

This project is proprietary. All rights reserved.

---

<p align="center">
  Built with ❤️ by the NPathways Team
</p>
