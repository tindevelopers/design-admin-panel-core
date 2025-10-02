'use client'

import { Card, CardHeader, CardContent } from '../../../components/primitives'
import { ChartOne, ChartThree } from '../../../components/primitives'
import Breadcrumb from '../components/Breadcrumb'

export default function Analytics() {
  // Sample data - replace with real data from your API
  const trafficData = [
    { month: 'Jan', visitors: 4500, pageViews: 12000 },
    { month: 'Feb', visitors: 5200, pageViews: 14500 },
    { month: 'Mar', visitors: 4800, pageViews: 13200 },
    { month: 'Apr', visitors: 6100, pageViews: 16800 },
    { month: 'May', visitors: 5900, pageViews: 15900 },
    { month: 'Jun', visitors: 7200, pageViews: 19500 },
  ]

  const conversionData = [
    { date: 'Week 1', conversions: 120 },
    { date: 'Week 2', conversions: 145 },
    { date: 'Week 3', conversions: 132 },
    { date: 'Week 4', conversions: 168 },
  ]

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">Total Visitors</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">33,600</p>
              <p className="text-sm text-green-600 mt-1">↑ 12.5% from last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">Page Views</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">91,900</p>
              <p className="text-sm text-green-600 mt-1">↑ 8.3% from last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">Avg. Session Duration</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">4:32</p>
              <p className="text-sm text-red-600 mt-1">↓ 2.1% from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Chart */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Traffic Overview</h3>
          <p className="text-sm text-gray-500">Visitors and page views over time</p>
        </CardHeader>
        <CardContent>
          <ChartOne data={trafficData} />
        </CardContent>
      </Card>

      {/* Conversion Chart */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Conversion Rate</h3>
          <p className="text-sm text-gray-500">Weekly conversion tracking</p>
        </CardHeader>
        <CardContent>
          <ChartThree data={conversionData} />
        </CardContent>
      </Card>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-sm font-medium text-gray-900">/dashboard</p>
                <p className="text-sm text-gray-500">Dashboard page</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">12,450</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-sm font-medium text-gray-900">/users</p>
                <p className="text-sm text-gray-500">Users page</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">8,320</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">/analytics</p>
                <p className="text-sm text-gray-500">Analytics page</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">6,180</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
