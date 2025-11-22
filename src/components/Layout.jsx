import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutGrid, 
  FolderKanban, 
  GraduationCap, 
  User, 
  Building2, 
  Newspaper,
  Users,
  Bell,
  Search,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import NotificationPanel from './NotificationPanel'

function Layout({ children, darkMode, setDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Overview', path: '/overview', section: 'Favorites' },
    { name: 'Projects', path: '/projects', section: 'Favorites' },
    { name: 'eCommerce', path: '/ecommerce', icon: LayoutGrid, section: 'Dashboards' },
    { name: 'Projects', path: '/projects-dash', icon: FolderKanban, section: 'Dashboards' },
    { name: 'Online Courses', path: '/online-courses', icon: GraduationCap, section: 'Dashboards' },
    { name: 'User Profile', path: '/profile', icon: User, section: 'Pages' },
    { name: 'Account', path: '/account', icon: User, section: 'Pages' },
    { name: 'Corporate', path: '/corporate', icon: Building2, section: 'Pages' },
    { name: 'Blog', path: '/blog', icon: Newspaper, section: 'Pages' },
    { name: 'Social', path: '/social', icon: Users, section: 'Pages' },
  ]

  const favorites = navItems.filter(item => item.section === 'Favorites')
  const dashboards = navItems.filter(item => item.section === 'Dashboards')
  const pages = navItems.filter(item => item.section === 'Pages')

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 fixed lg:relative h-full z-30"
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">ByeWind</span>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-80px)] p-4">
          {/* Favorites */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Favorites</span>
              <span className="text-xs text-gray-400">Recently</span>
            </div>
            <div className="space-y-1">
              {favorites.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  • {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div className="mb-6">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-2 block">Dashboards</span>
            <div className="space-y-1">
              <Link
                to="/default"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Default
              </Link>
              {dashboards.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Pages */}
          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-2 block">Pages</span>
            <div className="space-y-1">
              {pages.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">Dashboards</span>
                <span className="text-gray-400">/</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Default</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>

      {/* Notification Panel */}
      <AnimatePresence>
        {notificationsOpen && (
          <NotificationPanel onClose={() => setNotificationsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
