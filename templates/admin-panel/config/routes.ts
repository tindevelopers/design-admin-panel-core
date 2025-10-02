export interface Route {
  path: string
  component: string
  title: string
  requiresAuth?: boolean
}

export const routes: Route[] = [
  {
    path: '/dashboard',
    component: 'pages/dashboard',
    title: 'Dashboard',
    requiresAuth: true,
  },
  {
    path: '/users',
    component: 'pages/users/list',
    title: 'Users',
    requiresAuth: true,
  },
  {
    path: '/users/create',
    component: 'pages/users/create',
    title: 'Create User',
    requiresAuth: true,
  },
  {
    path: '/users/:id/edit',
    component: 'pages/users/edit',
    title: 'Edit User',
    requiresAuth: true,
  },
  {
    path: '/analytics',
    component: 'pages/analytics',
    title: 'Analytics',
    requiresAuth: true,
  },
  {
    path: '/reports',
    component: 'pages/reports',
    title: 'Reports',
    requiresAuth: true,
  },
  {
    path: '/settings/profile',
    component: 'pages/settings/profile',
    title: 'Profile Settings',
    requiresAuth: true,
  },
  {
    path: '/settings/account',
    component: 'pages/settings/account',
    title: 'Account Settings',
    requiresAuth: true,
  },
  {
    path: '/settings/preferences',
    component: 'pages/settings/preferences',
    title: 'Preferences',
    requiresAuth: true,
  },
]

// To remove a route, delete the corresponding object from the array
// Make sure to also remove the corresponding navigation item from navigation.ts
