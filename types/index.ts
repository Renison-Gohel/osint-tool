export type Employee = {
  id: string;
  photo: string;
  name: string;
  email: string;
  address: string;
  contactNumber: string;
  aadharCard: string;
  panCard: string;
  lastLocationCoordinates: [number, number];
  bankAccount: string;
  upiId: string;
  companyId: string;
};

export type Company = {
  id: string;
  name: string;
  employees: Employee[];
};

export type SearchOption = 
  | "name"
  | "drivingLicense"
  | "panCard"
  | "aadharCard"
  | "rtoNumber"
  | "gstNo"
  | "mobileNumber"
  | "upiId";

