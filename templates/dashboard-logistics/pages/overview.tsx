'use client'

import { Card, CardHeader, CardContent } from 'frontend-design-system/components/primitives'
import { CardDataStats } from 'frontend-design-system/components/primitives'
import { ChartOne } from 'frontend-design-system/components/primitives'
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'frontend-design-system/components/primitives'
import { Badge } from 'frontend-design-system/components/primitives'
import { Button } from 'frontend-design-system/components/primitives'
import { TruckIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function LogisticsDashboard() {
  const deliveryData = [
    { month: 'Jan', completed: 450, pending: 120 },
    { month: 'Feb', completed: 520, pending: 98 },
    { month: 'Mar', completed: 480, pending: 105 },
    { month: 'Apr', completed: 610, pending: 87 },
    { month: 'May', completed: 590, pending: 92 },
    { month: 'Jun', completed: 720, pending: 78 },
  ]

  const activeShipments = [
    { id: 'SH-001', destination: 'New York, NY', status: 'in-transit', eta: '2 hours', driver: 'John Doe' },
    { id: 'SH-002', destination: 'Los Angeles, CA', status: 'in-transit', eta: '4 hours', driver: 'Jane Smith' },
    { id: 'SH-003', destination: 'Chicago, IL', status: 'delayed', eta: '6 hours', driver: 'Bob Johnson' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Logistics Dashboard</h1>
        <Button variant="primary">New Shipment</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="Active Shipments" total="48" rate="12.5%" levelUp>
          <TruckIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Completed Today" total="127" rate="8.3%" levelUp>
          <CheckCircleIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Avg. Delivery Time" total="3.2h" rate="5.1%" levelDown>
          <ClockIcon className="h-6 w-6" />
        </CardDataStats>
        <CardDataStats title="Active Routes" total="24" rate="3.2%" levelUp>
          <MapPinIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Delivery Chart */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Delivery Overview</h3>
        </CardHeader>
        <CardContent>
          <ChartOne data={deliveryData} />
        </CardContent>
      </Card>

      {/* Active Shipments */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Active Shipments</h3>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Shipment ID</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Driver</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>ETA</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeShipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell><span className="font-medium">{shipment.id}</span></TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>{shipment.driver}</TableCell>
                  <TableCell>
                    <Badge variant={shipment.status === 'in-transit' ? 'info' : 'warning'}>
                      {shipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{shipment.eta}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="secondary">Track</Button>
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
