import http from "@/api/index";
import { User } from "@/model/user";


export const login = (data: Record<string, any>) => http.post<User>("/login", data);
