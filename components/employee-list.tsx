"use client"

import { useState } from "react"
import { Employee } from "@/types"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, CreditCard, Wallet } from 'lucide-react'
import { motion } from "framer-motion"
import { EmployeeDetailsDrawer } from "./employee-details-drawer"

interface EmployeeListProps {
  employees: Employee[]
}

export function EmployeeList({ employees }: EmployeeListProps) {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-yellow-400/50 transition-all cursor-pointer group"
              onClick={() => setSelectedEmployee(employee)}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <Image
                  src={employee.photo}
                  alt={employee.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-yellow-400/20 transition-transform group-hover:scale-105"
                  unoptimized
                />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                    {employee.name}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Mail className="mr-2 h-4 w-4" />
                    {employee.email}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">{employee.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{employee.contactNumber}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline" className="justify-center border-yellow-400/20">
                    <CreditCard className="mr-2 h-4 w-4" />
                    {employee.panCard}
                  </Badge>
                  <Badge variant="outline" className="justify-center border-yellow-400/20">
                    <Wallet className="mr-2 h-4 w-4" />
                    {employee.upiId}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <EmployeeDetailsDrawer
        employee={selectedEmployee}
        isOpen={selectedEmployee !== null}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  )
}

