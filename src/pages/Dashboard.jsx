import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

function Dashboard() {
  // Data for charts
  const projectionsData = [
    { month: 'Jan', actual: 15, projected: 12 },
    { month: 'Feb', actual: 20, projected: 18 },
    { month: 'Mar', actual: 18, projected: 22 },
    { month: 'Apr', actual: 25, projected: 20 },
    { month: 'May', actual: 22, projected: 28 },
    { month: 'Jun', actual: 30, projected: 25 },
  ]

  const revenueData = [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 12 },
    { month: 'Apr', value: 18 },
    { month: 'May', value: 14 },
    { month: 'Jun', value: 20 },
  ]

  const locationData = [
    { name: 'New York', value: 72, color: '#3b82f6' },
    { name: 'San Francisco', value: 39, color: '#8b5cf6' },
    { name: 'Sydney', value: 25, color: '#10b981' },
    { name: 'Singapore', value: 61, color: '#f59e0b' },
  ]

  const salesData = [
    { name: 'Direct', value: 300.56, color: '#3b82f6' },
    { name: 'Affiliate', value: 135.18, color: '#8b5cf6' },
    { name: 'Sponsored', value: 154.02, color: '#10b981' },
    { name: 'E-mail', value: 48.96, color: '#f59e0b' },
  ]

  const products = [
    { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
    { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
    { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
    { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
    { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">eCommerce</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Customers</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">3,781</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp size={16} />
              <span>+11.01%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Orders</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">1,219</div>
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <TrendingDown size={16} />
              <span>-0.03%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">$695</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp size={16} />
              <span>+15.03%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Growth</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">30.1%</div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp size={16} />
              <span>+6.08%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projections vs Actuals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Projections vs Actuals</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="actual" fill="#93c5fd" radius={[8, 8, 0, 0]} />
              <Bar dataKey="projected" fill="#bfdbfe" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Revenue by Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue by Location</h3>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {locationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {locationData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}K</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Revenue Chart and Total Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">Current Week: <strong>$58,211</strong></span>
              <span className="text-gray-600 dark:text-gray-400">Previous Week: <strong>$68,768</strong></span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Total Sales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Total Sales</h3>
          <div className="relative">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$8.6K</div>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {salesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">${item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Selling Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Selling Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {products.map((product, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">${product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{product.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${product.amount.toFixed(2)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
