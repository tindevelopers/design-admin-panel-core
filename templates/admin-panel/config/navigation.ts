import {
  ChartBarIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Users',
    href: '/users',
    icon: UsersIcon,
    badge: '12',
    children: [
      { name: 'All Users', href: '/users', icon: UsersIcon },
      { name: 'Add User', href: '/users/create', icon: UsersIcon },
    ],
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartBarIcon,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: DocumentTextIcon,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Cog6ToothIcon,
    children: [
      { name: 'Profile', href: '/settings/profile', icon: Cog6ToothIcon },
      { name: 'Account', href: '/settings/account', icon: Cog6ToothIcon },
      {
        name: 'Preferences',
        href: '/settings/preferences',
        icon: Cog6ToothIcon,
      },
    ],
  },
];

// To remove a menu item, simply delete or comment out the corresponding object
// Example: To remove Analytics, delete the Analytics object from the array
