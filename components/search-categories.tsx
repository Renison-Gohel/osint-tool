"use client"

import { SearchOption } from "@/types"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { User, Car, CreditCard, Building2, FileCheck, Building, Phone, Wallet } from 'lucide-react'

interface SearchCategoryProps {
  onSelect: (option: SearchOption) => void
}

interface Category {
  id: SearchOption
  icon: React.ReactNode
  label: string
}

const categories: Category[] = [
  {
    id: "name",
    icon: <User className="h-8 w-8" />,
    label: "Name Search"
  },
  {
    id: "drivingLicense",
    icon: <Car className="h-8 w-8" />,
    label: "Driving License"
  },
  {
    id: "panCard",
    icon: <CreditCard className="h-8 w-8" />,
    label: "PAN Card"
  },
  {
    id: "aadharCard",
    icon: <Building2 className="h-8 w-8" />,
    label: "Aadhar Card"
  },
  {
    id: "rtoNumber",
    icon: <FileCheck className="h-8 w-8" />,
    label: "RTO Number"
  },
  {
    id: "gstNo",
    icon: <Building className="h-8 w-8" />,
    label: "GST Number"
  },
  {
    id: "mobileNumber",
    icon: <Phone className="h-8 w-8" />,
    label: "Mobile Number"
  },
  {
    id: "upiId",
    icon: <Wallet className="h-8 w-8" />,
    label: "UPI ID"
  }
]

export function SearchCategories({ onSelect }: SearchCategoryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card
            className="p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-800/50 transition-colors border-gray-800 bg-gray-900/50"
            onClick={() => onSelect(category.id)}
          >
            <div className="p-3 rounded-full bg-gray-800 text-yellow-400">
              {category.icon}
            </div>
            <span className="text-sm text-center text-gray-300">{category.label}</span>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

