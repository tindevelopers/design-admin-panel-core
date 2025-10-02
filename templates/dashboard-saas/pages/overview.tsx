'use client'

import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CreditCardIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import {
  Button,
  Card,
  CardContent,
  CardDataStats,
  CardHeader,
  ChartOne,
  ChartThree,
} from '../../../components/primitives'

export default function SaaSDashboard() {
  const mrrData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 58000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 67000 },
    { month: 'Jun', value: 72000 },
  ]

  const churnData = [
    { month: 'Jan', rate: 3.2 },
    { month: 'Feb', rate: 2.8 },
    { month: 'Mar', rate: 2.5 },
    { month: 'Apr', rate: 2.9 },
    { month: 'May', rate: 2.3 },
    { month: 'Jun', rate: 2.1 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">SaaS Dashboard</h1>
        <Button variant="primary">View Reports</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="MRR" total="$72,000" rate="12.5%" levelUp>
          <CreditCardIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Active Users" total="3,456" rate="8.3%" levelUp>
          <UsersIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Churn Rate" total="2.1%" rate="0.8%" levelDown>
          <ArrowTrendingUpIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Avg. LTV" total="$2,400" rate="5.2%" levelUp>
          <BoltIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Monthly Recurring Revenue</h3>
          </CardHeader>
          <CardContent>
            <ChartOne data={mrrData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Churn Rate</h3>
          </CardHeader>
          <CardContent>
            <ChartThree data={churnData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
