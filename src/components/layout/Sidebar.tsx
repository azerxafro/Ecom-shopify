'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Navigation items for the sidebar
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: 'HomeIcon' },
  { name: 'Orders', href: '/dashboard/orders', icon: 'ShoppingCartIcon' },
  { name: 'Products', href: '/dashboard/products', icon: 'CubeIcon' },
  { name: 'Inventory', href: '/dashboard/inventory', icon: 'ArchiveBoxIcon' },
  { name: 'Customers', href: '/dashboard/customers', icon: 'UsersIcon' },
  { name: 'Content', href: '/dashboard/content', icon: 'DocumentTextIcon' },
  { name: 'Settings', href: '/dashboard/settings', icon: 'Cog6ToothIcon' },
]

export default function Sidebar() {
  const pathname = usePathname()
  
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">ERP Admin</h1>
      </div>
      <nav className="mt-5">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.name} className="mb-2">
                <Link href={item.href}>
                  <span className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                    isActive ? 'bg-indigo-600' : 'hover:bg-gray-700'
                  }`}>
                    <span className="mr-3">
                      {/* We'll add icons later */}
                    </span>
                    {item.name}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}