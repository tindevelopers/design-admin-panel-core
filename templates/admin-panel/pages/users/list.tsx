'use client'

import { useState } from 'react'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../../../../components/primitives'
import { Badge } from '../../../../components/primitives'
import { Button } from '../../../../components/primitives'
import { Input } from '../../../../components/primitives'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  createdAt: string
}

export default function UsersList() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Sample data - replace with real data from your API
  const users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'active',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'active',
      createdAt: '2024-01-20',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'User',
      status: 'inactive',
      createdAt: '2024-02-01',
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      role: 'Moderator',
      status: 'active',
      createdAt: '2024-02-10',
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: number) => {
    // Implement delete logic
    console.log('Delete user:', id)
  }

  return (
    <div className="space-y-6">
      <Breadcrumb />
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        <Link href="/users/create">
          <Button variant="primary">Add User</Button>
        </Link>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="font-medium text-gray-900">{user.name}</div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500">{user.email}</div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-900">{user.role}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500">{user.createdAt}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Link href={`/users/${user.id}/edit`}>
                      <Button size="sm" variant="secondary">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {filteredUsers.length} of {users.length} users
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">Previous</Button>
          <Button variant="secondary" size="sm">Next</Button>
        </div>
      </div>
    </div>
  )
}
