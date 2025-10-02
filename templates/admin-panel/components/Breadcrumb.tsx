'use client'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/dashboard' }]

    let currentPath = ''
    paths.forEach((path) => {
      currentPath += `/${path}`
      const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
      breadcrumbs.push({ name, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="mx-2 h-4 w-4 text-gray-400" aria-hidden="true" />
            )}
            {index === 0 && <HomeIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-sm font-medium text-gray-500">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
