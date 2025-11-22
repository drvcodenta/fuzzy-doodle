import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, ChevronLeft, ChevronRight, Copy } from 'lucide-react'

function OrderList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOrders, setSelectedOrders] = useState([])

  const orders = [
    { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  ]

  const getStatusColor = (status) => {
    const colors = {
      'In Progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Complete': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      'Pending': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Approved': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'Rejected': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const getUserColor = (index) => {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500']
    return colors[index % colors.length]
  }

  const filteredOrders = orders.filter(order =>
    order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const toggleSelectAll = () => {
    setSelectedOrders(prev =>
      prev.length === filteredOrders.length ? [] : filteredOrders.map(o => o.id)
    )
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Order List</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <Plus size={18} />
            <span>Add Order</span>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === filteredOrders.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Address</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredOrders.map((order, index) => (
                <motion.tr
                  key={`${order.id}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => toggleOrderSelection(order.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${getUserColor(index)} flex items-center justify-center text-white text-xs sm:text-sm font-medium`}>
                        {order.user.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">{order.user}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{order.project}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      {order.address}
                      <Copy size={14} className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{order.date}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      • {order.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      •••
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="p-1.5 sm:p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50">
            <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 sm:px-3 py-1 rounded text-sm ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-1.5 sm:p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default OrderList
