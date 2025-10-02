'use client'

import { Card, CardHeader, CardContent } from '../../../components/primitives'
import { CardDataStats } from '../../../components/primitives'
import { ChartOne, ChartFour } from '../../../components/primitives'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../../../components/primitives'
import { Badge } from '../../../components/primitives'
import { Button } from '../../../components/primitives'
import { UsersIcon, BriefcaseIcon, CurrencyDollarIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function CRMDashboard() {
  const salesPipeline = [
    { stage: 'Lead', value: 45, count: 120 },
    { stage: 'Qualified', value: 30, count: 80 },
    { stage: 'Proposal', value: 15, count: 40 },
    { stage: 'Closed', value: 10, count: 25 },
  ]

  const recentDeals = [
    { id: 1, company: 'Acme Corp', contact: 'John Doe', value: 50000, stage: 'Proposal', probability: 75 },
    { id: 2, company: 'TechStart Inc', contact: 'Jane Smith', value: 35000, stage: 'Qualified', probability: 50 },
    { id: 3, company: 'Global Solutions', contact: 'Bob Johnson', value: 75000, stage: 'Proposal', probability: 80 },
  ]

  const recentActivities = [
    { type: 'call', contact: 'John Doe', company: 'Acme Corp', time: '10 minutes ago' },
    { type: 'email', contact: 'Jane Smith', company: 'TechStart Inc', time: '1 hour ago' },
    { type: 'meeting', contact: 'Bob Johnson', company: 'Global Solutions', time: '2 hours ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">CRM Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="secondary">Add Contact</Button>
          <Button variant="primary">New Deal</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="Total Leads" total="265" rate="12.5%" levelUp>
          <UsersIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Active Deals" total="48" rate="8.3%" levelUp>
          <BriefcaseIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Pipeline Value" total="$2.4M" rate="15.2%" levelUp>
          <CurrencyDollarIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Calls Today" total="32" rate="5.1%" levelUp>
          <PhoneIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Pipeline & Activities */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Sales Pipeline</h3>
          </CardHeader>
          <CardContent>
            <ChartFour data={salesPipeline} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-gray-200 pb-3 last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.contact}</p>
                    <p className="text-sm text-gray-500">{activity.company} • {activity.type}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Deals */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Deals</h3>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Stage</TableCell>
                <TableCell>Probability</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell><span className="font-medium">{deal.company}</span></TableCell>
                  <TableCell>{deal.contact}</TableCell>
                  <TableCell>${deal.value.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="info">{deal.stage}</Badge>
                  </TableCell>
                  <TableCell>{deal.probability}%</TableCell>
                  <TableCell>
                    <Button size="sm" variant="secondary">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
