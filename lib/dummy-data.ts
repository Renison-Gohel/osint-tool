import { Company, Employee } from "@/types";

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    employees: [
      {
        id: "1",
        photo: "/placeholder.svg?height=100&width=100",
        name: "John Doe",
        email: "john@techcorp.com",
        address: "123 Tech St, Silicon Valley, CA",
        contactNumber: "1234567890",
        aadharCard: "1234 5678 9012",
        panCard: "ABCDE1234F",
        lastLocationCoordinates: [37.7749, -122.4194],
        bankAccount: "9876543210",
        upiId: "john@upi",
        companyId: "1"
      },
      {
        id: "2",
        photo: "https://i.ibb.co/4T0xgvs/image.png",
        name: "Prem Verma",
        email: "premkumar@gmail.com",
        address: "Outer Ring Rd, near JAIPUR GOLDEN HOSPITAL, Institutional Area, Rohini, Delhi, 110085",
        contactNumber: "6299366571",
        aadharCard: "1234 5678 9012",
        panCard: "ABCDE1234F",
        lastLocationCoordinates: [37.7749, -122.4194],
        bankAccount: "9876543210",
        upiId: "prem@upi",
        companyId: "1"
      },
      // Add more employees...
    ]
  },
  // Add more companies...
];

export const allEmployees: Employee[] = companies.flatMap(company => company.employees);

export function searchEmployees(option: string, value: string): Employee[] {
  return allEmployees.filter(employee => {
    switch (option) {
      case "name":
        return employee.name.toLowerCase().includes(value.toLowerCase());
      case "drivingLicense":
      case "rtoNumber":
      case "gstNo":
        // These fields don't exist in our data, so we'll always return false
        return false;
      case "panCard":
        return employee.panCard.toLowerCase().includes(value.toLowerCase());
      case "aadharCard":
        return employee.aadharCard.toLowerCase().includes(value.toLowerCase());
      case "mobileNumber":
        return employee.contactNumber.includes(value);
      case "upiId":
        return employee.upiId.toLowerCase().includes(value.toLowerCase());
      default:
        return false;
    }
  });
}

