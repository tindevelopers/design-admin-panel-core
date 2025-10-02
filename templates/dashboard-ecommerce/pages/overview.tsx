'use client';

import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDataStats,
  CardHeader,
  ChartFour,
  ChartOne,
  ChartTwo,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../components/primitives';

export default function EcommerceDashboard() {
  // Sample data
  const revenueData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 59000 },
    { month: 'Jun', value: 72000 },
  ];

  const categoryData = [
    { category: 'Electronics', value: 35000 },
    { category: 'Clothing', value: 28000 },
    { category: 'Home & Garden', value: 22000 },
    { category: 'Sports', value: 15000 },
  ];

  const salesByChannel = [
    { label: 'Online Store', value: 60 },
    { label: 'Mobile App', value: 25 },
    { label: 'Marketplace', value: 15 },
  ];

  const recentOrders = [
    {
      id: '#12345',
      customer: 'John Doe',
      amount: 299.99,
      status: 'completed',
      date: '2024-03-15',
    },
    {
      id: '#12346',
      customer: 'Jane Smith',
      amount: 149.5,
      status: 'processing',
      date: '2024-03-15',
    },
    {
      id: '#12347',
      customer: 'Bob Johnson',
      amount: 599.0,
      status: 'completed',
      date: '2024-03-14',
    },
    {
      id: '#12348',
      customer: 'Alice Williams',
      amount: 89.99,
      status: 'pending',
      date: '2024-03-14',
    },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 1234, revenue: 49360 },
    { name: 'Smart Watch', sales: 987, revenue: 197400 },
    { name: 'Laptop Stand', sales: 756, revenue: 22680 },
    { name: 'USB-C Cable', sales: 654, revenue: 9810 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          E-commerce Dashboard
        </h1>
        <div className="flex gap-2">
          <Button variant="secondary">Export</Button>
          <Button variant="primary">Add Product</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats
          title="Total Revenue"
          total="$337,000"
          rate="8.5%"
          levelUp
        >
          <CurrencyDollarIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats title="Total Orders" total="2,450" rate="4.3%" levelUp>
          <ShoppingCartIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats
          title="Total Customers"
          total="1,234"
          rate="2.1%"
          levelUp
        >
          <UsersIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats
          title="Conversion Rate"
          total="3.2%"
          rate="0.5%"
          levelDown
        >
          <ChartBarIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h3>
            <p className="text-sm text-gray-500">
              Monthly revenue for the last 6 months
            </p>
          </CardHeader>
          <CardBody>
            <ChartOne data={revenueData} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Sales by Category
            </h3>
            <p className="text-sm text-gray-500">Product category breakdown</p>
          </CardHeader>
          <CardBody>
            <ChartTwo data={categoryData} />
          </CardBody>
        </Card>
      </div>

      {/* Sales Channel & Top Products */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Sales by Channel
            </h3>
          </CardHeader>
          <CardBody>
            <ChartFour data={salesByChannel} />
          </CardBody>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Top Products
            </h3>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${product.revenue.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <span className="font-medium text-gray-900">
                      {order.id}
                    </span>
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>${order.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === 'completed'
                          ? 'success'
                          : order.status === 'processing'
                            ? 'warning'
                            : 'info'
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="secondary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
