"use client"

import { useState } from "react"
import { SearchForm } from "@/components/search-form"
import { EmployeeList } from "@/components/employee-list"
import { searchEmployees } from "@/lib/dummy-data"
import { Employee, SearchOption } from "@/types"

export default function Home() {
  const [searchResults, setSearchResults] = useState<Employee[]>([])

  const handleSearch = (option: SearchOption, value: string) => {
    const results = searchEmployees(option, value)
    setSearchResults(results)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-16">
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-xl mx-auto mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>
        {searchResults.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-light mb-6">Search Results</h2>
            <EmployeeList employees={searchResults} />
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">No results found. Try a different search.</p>
          </div>
        )}
      </main>
    </div>
  )
}

