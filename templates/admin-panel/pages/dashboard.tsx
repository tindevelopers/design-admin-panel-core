'use client'

import { Card, CardHeader, CardContent } from '../../../components/primitives'
import { Button } from '../../../components/primitives'
import { 
  UsersIcon, 
  ShoppingCartIcon, 
  CurrencyDollarIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'
import Breadcrumb from '../components/Breadcrumb'

export default function Dashboard() {
  // Sample data - replace with real data from your API
  const revenueData = [
    { month: 'Jan', value: 4500 },
    { month: 'Feb', value: 5200 },
    { month: 'Mar', value: 4800 },
    { month: 'Apr', value: 6100 },
    { month: 'May', value: 5900 },
    { month: 'Jun', value: 7200 },
  ]

  const salesData = [
    { category: 'Electronics', value: 3500 },
    { category: 'Clothing', value: 2800 },
    { category: 'Food', value: 4200 },
    { category: 'Books', value: 1900 },
  ]

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats
          title="Total Users"
          total="3,456"
          rate="4.35%"
          levelUp
        >
          <UsersIcon className="h-6 w-6" />
        </CardDataStats>
        
        <CardDataStats
          title="Total Orders"
          total="2,450"
          rate="2.59%"
          levelUp
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </CardDataStats>
        
        <CardDataStats
          title="Total Revenue"
          total="$45,200"
          rate="0.95%"
          levelUp
        >
          <CurrencyDollarIcon className="h-6 w-6" />
        </CardDataStats>
        
        <CardDataStats
          title="Growth Rate"
          total="12.5%"
          rate="0.43%"
          levelDown
        >
          <ChartBarIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <p className="text-sm text-gray-500">Monthly revenue for the last 6 months</p>
          </CardHeader>
          <CardBody>
            <ChartOne data={revenueData} />
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
            <p className="text-sm text-gray-500">Product category breakdown</p>
          </CardHeader>
          <CardBody>
            <ChartTwo data={salesData} />
          </CardBody>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">New user registered</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <span className="text-sm text-gray-500">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Order #1234 completed</p>
                <p className="text-sm text-gray-500">$299.00</p>
              </div>
              <span className="text-sm text-gray-500">15 minutes ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">New product added</p>
                <p className="text-sm text-gray-500">Wireless Headphones</p>
              </div>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
