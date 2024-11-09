import {  User, Comment } from "@prisma/client";



export type SafeUser = Omit<
  User,
  "id" |"name "| "email" | "image" | "hashedpassword"  | "role" | "createdAt" | "updatedAt" | "emailVerified" 
> & {
  id:string;
  name : string;
  email: string;   
  image:  string;
  hashedPassword: string;
  role:string;
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export type SafeComment = Omit<
Comment,
  "createdAt" > & {
  createdAt: string;
  };

