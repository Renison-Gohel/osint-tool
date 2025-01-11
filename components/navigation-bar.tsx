"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function NavigationBar() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">OSINT Portal</h1>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Companies</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Analytics</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Quick search..."
              className="pl-8 bg-gray-900 border-gray-800 focus:border-yellow-400/50 transition-colors"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

