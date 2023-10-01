import http from "@/api/index";

export const login = (data: Record<string, any>) => http.post("/login", data);
