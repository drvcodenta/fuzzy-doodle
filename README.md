# SaaS Dashboard - ByeWind

A modern, pixel-perfect SaaS dashboard built with React, Tailwind CSS, and Framer Motion. Features include real-time data visualization, dark/light theme switching, responsive design, and smooth animations.

## ✨ Features

- 📊 **Interactive Charts** - Built with Recharts for beautiful data visualization
- 🎨 **Dark/Light Theme** - Seamless theme switching with smooth transitions
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Powered by Framer Motion for delightful microinteractions
- 🔍 **Search & Filter** - Real-time search and filtering capabilities
- 📄 **Pagination** - Efficient data pagination for large datasets
- 🎯 **Pixel-Perfect** - Matches design specifications exactly

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Recharts** - Chart library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fuzzy-doodle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📝 Project Structure

```
src/
├── components/
│   ├── Layout.jsx           # Main layout with sidebar and header
│   └── NotificationPanel.jsx # Notification sidebar panel
├── pages/
│   ├── Dashboard.jsx        # eCommerce dashboard page
│   └── OrderList.jsx        # Order list with table and pagination
├── App.jsx                  # Main app component with routing
├── main.jsx                 # App entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎨 Features Breakdown

### Dashboard Page
- KPI cards with trend indicators
- Projections vs Actuals bar chart
- Revenue line chart with area fill
- Revenue by location pie chart
- Total sales donut chart
- Top selling products table

### Order List Page
- Searchable order table
- Multi-select checkboxes
- Status badges with different colors
- Pagination controls
- Responsive layout

### Theme System
- Light and dark mode toggle
- Persistent theme preference
- Smooth color transitions
- Optimized for both themes

### Animations
- Page transition animations
- Hover effects on interactive elements
- Loading states
- Smooth chart transitions
- Notification panel slide-in/out

## 🎯 Key Components

### Layout Component
- Responsive sidebar navigation
- Search functionality
- Theme toggle
- Notification panel
- User avatar

### Dashboard Charts
- Bar Chart (Projections vs Actuals)
- Area Chart (Revenue trends)
- Pie Charts (Location & Sales distribution)
- Custom tooltips and legends

### Order Table
- Sortable columns
- Row selection
- Status filtering
- Pagination
- Search functionality

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Palette

### Light Theme
- Background: Gray 50
- Card: White
- Text: Gray 900
- Border: Gray 200

### Dark Theme
- Background: Gray 900
- Card: Gray 800
- Text: White
- Border: Gray 700

### Accent Colors
- Primary: Blue 600
- Success: Green 500
- Warning: Orange 500
- Danger: Red 500

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  ```bash
  npm run build
  # Upload dist folder to Netlify
  ```

- **GitHub Pages**
  - Build the project
  - Deploy the `dist` folder

## 📄 License

MIT License

## 👨‍💻 Author

Created with ❤️ by [Your Name]

## 🙏 Acknowledgments

- Design inspiration from modern SaaS dashboards
- Icons by Lucide
- Charts by Recharts
- Animations by Framer Motion
