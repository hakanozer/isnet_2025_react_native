import { IUser } from "@/models/IUser";
import apiClient from "./apiConfig";

export const userLogin = (email: string, password: string) => {
  const sendObj = {
    email: email,
    password: password
  }
  return apiClient.post<IUser>("auth/login", sendObj);
}