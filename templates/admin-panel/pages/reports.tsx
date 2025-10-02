'use client'

import { Card, CardHeader, CardContent } from '../../../components/primitives'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../../../components/primitives'
import { Button } from '../../../components/primitives'
import { Badge } from '../../../components/primitives'
import Breadcrumb from '../components/Breadcrumb'

export default function Reports() {
  // Sample data - replace with real data from your API
  const reports = [
    {
      id: 1,
      name: 'Monthly Sales Report',
      type: 'Sales',
      generatedAt: '2024-03-01',
      status: 'completed',
    },
    {
      id: 2,
      name: 'User Activity Report',
      type: 'Analytics',
      generatedAt: '2024-03-05',
      status: 'completed',
    },
    {
      id: 3,
      name: 'Revenue Analysis',
      type: 'Finance',
      generatedAt: '2024-03-10',
      status: 'processing',
    },
    {
      id: 4,
      name: 'Customer Feedback Report',
      type: 'Support',
      generatedAt: '2024-03-15',
      status: 'completed',
    },
  ]

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <Button variant="primary">Generate Report</Button>
      </div>

      {/* Report Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">Total Reports</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">48</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">This Month</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <div className="text-center">
              <p className="text-sm text-gray-500">Processing</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Report Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Generated</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="font-medium text-gray-900">{report.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-gray-500">{report.type}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-gray-500">{report.generatedAt}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        report.status === 'completed'
                          ? 'success'
                          : report.status === 'processing'
                          ? 'warning'
                          : 'danger'
                      }
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        View
                      </Button>
                      <Button size="sm" variant="secondary">
                        Download
                      </Button>
                    </div>
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
