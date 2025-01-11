"use client"

import { Employee } from "@/types"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { User, Mail, Phone, MapPin, CreditCard, Building, Wallet, Map, BanknoteIcon as Bank, X } from 'lucide-react'
import { motion } from "framer-motion"

interface EmployeeDetailsDrawerProps {
  employee: Employee | null
  isOpen: boolean
  onClose: () => void
}

export function EmployeeDetailsDrawer({
  employee,
  isOpen,
  onClose
}: EmployeeDetailsDrawerProps) {
  if (!employee) return null

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-gray-900 border-t border-gray-800">
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Image
                    src={employee.photo}
                    alt={employee.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-yellow-400/20"
                    unoptimized
                  />
                </motion.div>
                <div>
                  <DrawerTitle className="text-2xl font-light">
                    {employee.name}
                  </DrawerTitle>
                  <DrawerDescription className="flex items-center text-gray-400">
                    <Mail className="mr-2 h-4 w-4" />
                    {employee.email}
                  </DrawerDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DrawerHeader>
          <div className="p-4">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="bg-gray-800 border-gray-700 w-full justify-start">
                <TabsTrigger value="details" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Personal Details
                </TabsTrigger>
                <TabsTrigger value="documents" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Documents
                </TabsTrigger>
                <TabsTrigger value="location" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                  Location
                </TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[400px] mt-4 pr-4">
                <TabsContent value="details" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4"
                  >
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <User className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Full Name</p>
                        <p className="text-base">{employee.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <Phone className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Contact Number</p>
                        <p className="text-base">{employee.contactNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Address</p>
                        <p className="text-base">{employee.address}</p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="documents" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-4"
                  >
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <CreditCard className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">PAN Card</p>
                        <p className="text-base">{employee.panCard}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <Building className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Aadhar Card</p>
                        <p className="text-base">{employee.aadharCard}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <Wallet className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">UPI ID</p>
                        <p className="text-base">{employee.upiId}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
                      <Bank className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Bank Account</p>
                        <p className="text-base">{employee.bankAccount}</p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="location" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Map className="h-5 w-5 text-yellow-400" />
                        <p className="text-sm text-gray-400">Last Known Location</p>
                      </div>
                      <Badge variant="outline" className="border-yellow-400/20">
                        Lat: {employee.lastLocationCoordinates[0]}
                      </Badge>
                      <Badge variant="outline" className="ml-2 border-yellow-400/20">
                        Long: {employee.lastLocationCoordinates[1]}
                      </Badge>
                    </div>
                    <div className="aspect-video rounded-lg bg-gray-800/50 flex items-center justify-center">
                      <p className="text-gray-400">Map view placeholder</p>
                    </div>
                  </motion.div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

