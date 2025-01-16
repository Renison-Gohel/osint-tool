"use client"

import { useState } from "react"
import { SearchOption } from "@/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, X } from 'lucide-react'
import { SearchCategories } from "./search-categories"
import { motion, AnimatePresence } from "framer-motion"

interface SearchFormProps {
  onSearch: (option: SearchOption, value: string) => void
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [searchOption, setSearchOption] = useState<SearchOption | null>(null)
  const [searchValue, setSearchValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchOption) {
      onSearch(searchOption, searchValue)
    }
  }

  const handleCategorySelect = (option: SearchOption) => {
    setSearchOption(option)
    setSearchValue("")
  }

  const handleReset = () => {
    setSearchOption(null)
    setSearchValue("")
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-light flex items-center justify-between">
          Search System
          {searchOption && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {!searchOption ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SearchCategories onSelect={handleCategorySelect} />
            </motion.div>
          ) : (
            <motion.form
              key="searchForm"
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">
                  Search by {searchOption.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </label>
                <Input
                  type="text"
                  placeholder={`Enter ${searchOption.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Search <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

