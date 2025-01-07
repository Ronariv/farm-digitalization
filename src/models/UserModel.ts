export interface User {
    id: string;
    email: string;
    pass: string; // Encrypted password
    role: "ADMIN" | "USER" | "MANAGER"; // Example UserRole enums
    name: string;
}
  