export interface SignUp {
  name: string;
  email: string;
  password: string;
  pin: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  created: string;
  modified: string;
}

export interface Profile {
  id: number;
  transaction: string;
  name: string;
  pin: string;
  role: string;
  created: string;
  modified: string;
}

export interface Token {
  access: string;
  refresh: string;
}

export interface Sheet {
  id: number;
  transaction: string;
  merchant: User;
  customer: User;
  created: string;
  modified: string;
  balance: number;
}

export interface Record {
  id: number;
  transaction: string;
  operation: string;
  note: string;
  sheet: Sheet;
  attendant: Profile;
  signatary: Profile;
  value: number;
  created: string;
  modified: string;
}

export interface Role {
  id: string;
  name: string;
}
