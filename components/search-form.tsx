"use client"

import { useState } from "react"
import { SearchOption } from "@/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

interface SearchFormProps {
  onSearch: (option: SearchOption, value: string) => void
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [searchOption, setSearchOption] = useState<SearchOption>("name")
  const [searchValue, setSearchValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchOption, searchValue)
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-light">
           Search System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select value={searchOption} onValueChange={(value) => setSearchOption(value as SearchOption)}>
            <SelectTrigger className="w-full bg-gray-800 border-gray-700">
              <SelectValue placeholder="Select search option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="drivingLicense">Driving License</SelectItem>
              <SelectItem value="panCard">PAN Card</SelectItem>
              <SelectItem value="aadharCard">Aadhar Card</SelectItem>
              <SelectItem value="rtoNumber">RTO Number</SelectItem>
              <SelectItem value="gstNo">GST No</SelectItem>
              <SelectItem value="mobileNumber">Mobile Number</SelectItem>
              <SelectItem value="upiId">UPI ID</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder={`Enter ${searchOption}`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-gray-800 border-gray-700"
          />
          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
            Search <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

