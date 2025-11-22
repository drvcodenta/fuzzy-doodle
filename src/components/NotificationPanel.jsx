import { motion } from 'framer-motion'
import { X, Bug, UserPlus, Bell as BellIcon, FileText, Trash2 } from 'lucide-react'

function NotificationPanel({ onClose }) {
  const notifications = [
    { id: 1, type: 'bug', title: 'You have a bug that needs...', time: 'Just now' },
    { id: 2, type: 'user', title: 'New user registered', time: '59 minutes ago' },
    { id: 3, type: 'bug', title: 'You have a bug that needs...', time: '12 hours ago' },
    { id: 4, type: 'subscription', title: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' },
  ]

  const activities = [
    { id: 1, action: 'You have a bug that needs...', time: 'Just now', user: 'User1' },
    { id: 2, action: 'Released a new version', time: '59 minutes ago', user: 'User2' },
    { id: 3, action: 'Submitted a bug', time: '12 hours ago', user: 'User3' },
    { id: 4, action: 'Modified A data in Page X', time: 'Today, 11:59 AM', user: 'User4' },
    { id: 5, action: 'Deleted a page in Project X', time: 'Feb 2, 2023', user: 'User5' },
  ]

  const contacts = [
    { name: 'Natali Craig', color: 'bg-blue-500' },
    { name: 'Drew Cano', color: 'bg-red-500' },
    { name: 'Orlando Diggs', color: 'bg-yellow-500' },
    { name: 'Andi Lane', color: 'bg-green-500' },
    { name: 'Kate Morrison', color: 'bg-purple-500' },
    { name: 'Koray Okumus', color: 'bg-pink-500' },
  ]

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'spring', damping: 25 }}
      className="fixed right-0 top-0 h-full w-full sm:w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto border-l border-gray-200 dark:border-gray-700"
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800">
        <h2 className="font-semibold text-gray-900 dark:text-white">Notifications</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            whileHover={{ scale: 1.02 }}
            className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              notification.type === 'bug' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
            }`}>
              {notification.type === 'bug' ? <Bug size={18} /> : <UserPlus size={18} />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white">{notification.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Activities</h3>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contacts</h3>
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
            >
              <div className={`w-8 h-8 rounded-full ${contact.color}`}></div>
              <span className="text-sm text-gray-900 dark:text-white">{contact.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default NotificationPanel
