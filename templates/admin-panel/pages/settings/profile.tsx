'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent } from 'frontend-design-system/components/primitives'
import { Button } from 'frontend-design-system/components/primitives'
import { FormInput, FormTextarea } from 'frontend-design-system/components/primitives'
import { Avatar } from 'frontend-design-system/components/primitives'
import Breadcrumb from '../../components/Breadcrumb'

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    bio: 'System administrator',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement save logic
    console.log('Save profile:', formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Picture */}
        <Card>
          <CardContent>
            <div className="text-center">
              <Avatar src="/user.jpg" alt="Profile" size="xl" className="mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{formData.name}</h3>
              <p className="text-sm text-gray-500">{formData.email}</p>
              <Button variant="secondary" size="sm" className="mt-4">
                Change Photo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <p className="text-sm text-gray-500">Update your personal details</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />

                <FormInput
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                />

                <FormTextarea
                  label="Bio"
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                />

                <div className="flex gap-4 pt-4">
                  <Button type="submit" variant="primary">
                    Save Changes
                  </Button>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
