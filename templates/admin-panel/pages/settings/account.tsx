'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent } from 'frontend-design-system/components/primitives'
import { Button } from 'frontend-design-system/components/primitives'
import { FormInput } from 'frontend-design-system/components/primitives'
import Breadcrumb from '../../components/Breadcrumb'

export default function AccountSettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement password change logic
    console.log('Change password')
  }

  const handleDeactivate = () => {
    // Implement account deactivation logic
    console.log('Deactivate account')
  }

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
      </div>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
          <p className="text-sm text-gray-500">Update your password to keep your account secure</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <FormInput
              label="Current Password"
              name="currentPassword"
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))
              }
            />

            <FormInput
              label="New Password"
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))
              }
            />

            <FormInput
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))
              }
            />

            <Button type="submit" variant="primary">
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Status: Not Enabled</p>
              <p className="text-sm text-gray-500">
                Protect your account with two-factor authentication
              </p>
            </div>
            <Button variant="primary">Enable 2FA</Button>
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Active Sessions</h3>
          <p className="text-sm text-gray-500">Manage your active sessions across devices</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Chrome on MacOS</p>
                <p className="text-sm text-gray-500">San Francisco, CA • Current session</p>
              </div>
              <span className="text-sm text-green-600">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                <p className="text-sm text-gray-500">San Francisco, CA • Last active 2 hours ago</p>
              </div>
              <Button size="sm" variant="danger">
                Revoke
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>
          <p className="text-sm text-gray-500">Irreversible actions for your account</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Deactivate Account</p>
                <p className="text-sm text-gray-500">
                  Temporarily disable your account. You can reactivate it later.
                </p>
              </div>
              <Button variant="danger" onClick={handleDeactivate}>
                Deactivate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
