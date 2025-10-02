'use client';

import {
  ClockIcon,
  CursorArrowRaysIcon,
  EyeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Card,
  CardContent,
  CardDataStats,
  CardHeader,
  ChartFour,
  ChartOne,
  ChartThree,
} from '../../../components/primitives';

export default function AnalyticsDashboard() {
  // Sample data
  const trafficData = [
    { month: 'Jan', visitors: 12500, pageViews: 45000, bounceRate: 42 },
    { month: 'Feb', visitors: 15200, pageViews: 52000, bounceRate: 38 },
    { month: 'Mar', visitors: 14800, pageViews: 48000, bounceRate: 40 },
    { month: 'Apr', visitors: 18100, pageViews: 61000, bounceRate: 35 },
    { month: 'May', visitors: 19900, pageViews: 65000, bounceRate: 33 },
    { month: 'Jun', visitors: 22200, pageViews: 72000, bounceRate: 31 },
  ];

  const conversionData = [
    { date: 'Week 1', conversions: 320, rate: 3.2 },
    { date: 'Week 2', conversions: 445, rate: 3.8 },
    { date: 'Week 3', conversions: 532, rate: 4.1 },
    { date: 'Week 4', conversions: 468, rate: 3.6 },
  ];

  const trafficSources = [
    { label: 'Organic Search', value: 45 },
    { label: 'Direct', value: 25 },
    { label: 'Social Media', value: 20 },
    { label: 'Referral', value: 10 },
  ];

  const topPages = [
    { page: '/home', views: 45230, avgTime: '3:24', bounceRate: '32%' },
    { page: '/products', views: 32180, avgTime: '4:12', bounceRate: '28%' },
    { page: '/blog', views: 28450, avgTime: '5:45', bounceRate: '25%' },
    { page: '/about', views: 18920, avgTime: '2:18', bounceRate: '45%' },
    { page: '/contact', views: 12340, avgTime: '1:52', bounceRate: '52%' },
  ];

  const deviceBreakdown = [
    { device: 'Desktop', sessions: 45230, percentage: 52 },
    { device: 'Mobile', sessions: 32180, percentage: 37 },
    { device: 'Tablet', sessions: 9590, percentage: 11 },
  ];

  const topCountries = [
    { country: 'United States', users: 12450, percentage: 35 },
    { country: 'United Kingdom', users: 8320, percentage: 23 },
    { country: 'Canada', users: 6180, percentage: 17 },
    { country: 'Germany', users: 4250, percentage: 12 },
    { country: 'France', users: 3800, percentage: 11 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Analytics Dashboard
        </h1>
        <div className="flex gap-2">
          <Button variant="secondary">Last 7 Days</Button>
          <Button variant="secondary">Last 30 Days</Button>
          <Button variant="primary">Custom Range</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats
          title="Total Visitors"
          total="102,700"
          rate="12.5%"
          levelUp
        >
          <UsersIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats title="Page Views" total="343,000" rate="8.3%" levelUp>
          <EyeIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats title="Avg. Session" total="4:32" rate="2.1%" levelDown>
          <ClockIcon className="h-6 w-6" />
        </CardDataStats>

        <CardDataStats title="Conversions" total="1,765" rate="4.5%" levelUp>
          <CursorArrowRaysIcon className="h-6 w-6" />
        </CardDataStats>
      </div>

      {/* Traffic & Conversion Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Traffic Overview
            </h3>
            <p className="text-sm text-gray-500">
              Visitors and page views over time
            </p>
          </CardHeader>
          <CardContent>
            <ChartOne data={trafficData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Conversion Tracking
            </h3>
            <p className="text-sm text-gray-500">Weekly conversion rate</p>
          </CardHeader>
          <CardContent>
            <ChartThree data={conversionData} />
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources & Device Breakdown */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Traffic Sources
            </h3>
            <p className="text-sm text-gray-500">
              Where your visitors come from
            </p>
          </CardHeader>
          <CardContent>
            <ChartFour data={trafficSources} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              Device Breakdown
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        {item.device}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    {item.sessions.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
          <p className="text-sm text-gray-500">Most visited pages</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Page
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Views
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Avg. Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Bounce Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topPages.map((page, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {page.page}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {page.avgTime}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {page.bounceRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Geographic Data */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Top Countries</h3>
          <p className="text-sm text-gray-500">Visitors by country</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCountries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {country.country}
                    </span>
                    <span className="text-sm text-gray-500">
                      {country.percentage}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-green-600"
                      style={{ width: `${country.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-500">
                  {country.users.toLocaleString()} users
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
