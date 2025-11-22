import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import OrderList from './pages/OrderList'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Navigate to="/ecommerce" replace />} />
            <Route path="/ecommerce" element={<Dashboard />} />
            <Route path="/projects" element={<OrderList />} />
            <Route path="/online-courses" element={<div className="p-6">Online Courses</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
