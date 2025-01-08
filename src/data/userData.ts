import { User } from "@/models/UserModel";

export const usersData: User[] = [
    {
        id: "1",
        email: "user1@example.com",
        name: "Hendra Wijaya",
        profile_url: "https://example.com/user1",
        last_time_online: "2025-01-08T08:30:00Z",
        owned_farms: ["Peternakan Ujang"],
        operated_farms: ["Peternakan Nuel dan Caca"]
    },
    {
        id: "2",
        email: "user2@example.com",
        name: "Siti Nurhaliza",
        profile_url: "https://example.com/user2",
        last_time_online: "2025-01-08T09:00:00Z",
        owned_farms: ["Peternakan Nuel dan Caca"],
        operated_farms: ["Peternakan Ujang"]
    },
    {
        id: "3",
        email: "user3@example.com",
        name: "Joko Santoso",
        profile_url: "https://example.com/user3",
        last_time_online: "2025-01-07T15:00:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang", "Peternakan Nuel dan Caca"]
    },
    {
        id: "4",
        email: "user4@example.com",
        name: "Rina Dwi",
        profile_url: "https://example.com/user4",
        last_time_online: "2025-01-08T08:45:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang", "Peternakan Nuel dan Caca"]
    },
    {
        id: "5",
        email: "user5@example.com",
        name: "Maya Yuliana",
        profile_url: "https://example.com/user5",
        last_time_online: "2025-01-07T17:30:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang"]
    }
];
