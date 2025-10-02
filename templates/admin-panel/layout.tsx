import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      
      <div className="lg:pl-72">
        <Header />
        
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
