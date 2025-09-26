import { IUser } from "@/models/IUser";
import apiClient from "./apiConfig";

export const userLogin = (email: string, password: string) => {
  const sendObj = {
    email: email,
    password: password
  }
  return apiClient.post<IUser>("auth/login", sendObj);
}

export const userLogout = () => {
  // logout işlemi
  return apiClient.post("auth/logout");
}

export const profileMe = (jwtToken: string) => {
  const headers = {
    Authorization: `Bearer ${jwtToken}`
  }
  return apiClient.get<IUser>("profile/me", {headers});
}
