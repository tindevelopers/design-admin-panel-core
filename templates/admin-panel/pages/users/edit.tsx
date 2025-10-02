'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Card, CardHeader, CardContent } from '../../../components/primitives'
import { Button } from '../../../components/primitives'
import { FormInput, FormSelect, FormCheckbox } from '../../../components/primitives'
import Breadcrumb from '../../components/Breadcrumb'

export default function EditUser() {
  const router = useRouter()
  const params = useParams()
  const userId = params.id

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    status: 'active',
  })

  useEffect(() => {
    // Fetch user data - replace with real API call
    const fetchUser = async () => {
      // Simulated data
      const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        status: 'active',
      }
      setFormData(userData)
    }
    
    fetchUser()
  }, [userId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement update user logic
    console.log('Update user:', userId, formData)
    router.push('/users')
  }

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Edit User</h1>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">User Information</h3>
          <p className="text-sm text-gray-500">Update user details</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Full Name"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />

            <FormSelect
              label="Role"
              name="role"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              options={[
                { value: 'user', label: 'User' },
                { value: 'moderator', label: 'Moderator' },
                { value: 'admin', label: 'Admin' },
              ]}
            />

            <FormSelect
              label="Status"
              name="status"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              options={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
              ]}
            />

            <div className="flex gap-4 pt-4">
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => router.push('/users')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
