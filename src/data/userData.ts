import { User } from "@/models/UserModel";

export const usersData: User[] = [
    {
        id: "1",
        email: "user1@example.com",
        name: "Hendra Wijaya",
        profile_url: "https://firebasestorage.googleapis.com/v0/b/manta-dive-75b30.firebasestorage.app/o/WhatsApp%20Image%202025-01-13%20at%2017.41.58.jpeg?alt=media&token=3a870218-c844-4ae6-be6f-c2cbb4a03d27",
        last_time_online: "2025-01-08T08:30:00Z",
        owned_farms: ["Peternakan Ujang"],
        operated_farms: ["Peternakan Jatidiri"]
    },
    {
        id: "2",
        email: "user2@example.com",
        name: "Siti Nurhaliza",
        profile_url: "https://avatars.githubusercontent.com/u/111560506?v=4",
        last_time_online: "2025-01-08T09:00:00Z",
        owned_farms: ["Peternakan Jatidiri"],
        operated_farms: ["Peternakan Ujang"]
    },
    {
        id: "3",
        email: "https://firebasestorage.googleapis.com/v0/b/manta-dive-75b30.firebasestorage.app/o/WhatsApp%20Image%202025-01-13%20at%2017.37.47.jpeg?alt=media&token=4e35a03b-d0fe-4596-b1d9-debd0b96a142",
        name: "Joko Santoso",
        profile_url: "https://example.com/user3",
        last_time_online: "2025-01-07T15:00:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang", "Peternakan Jatidiri"]
    },
    {
        id: "4",
        email: "https://firebasestorage.googleapis.com/v0/b/manta-dive-75b30.firebasestorage.app/o/WhatsApp%20Image%202025-01-13%20at%2017.40.16.jpeg?alt=media&token=ec7634a0-402b-4f2e-92e0-ce7ea82b15d8",
        name: "Rina Dwi",
        profile_url: "https://example.com/user4",
        last_time_online: "2025-01-08T08:45:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang", "Peternakan Jatidiri"]
    },
    {
        id: "5",
        email: "https://firebasestorage.googleapis.com/v0/b/manta-dive-75b30.firebasestorage.app/o/WhatsApp%20Image%202025-01-13%20at%2017.40.13.jpeg?alt=media&token=2a3cf74a-9a4f-45a6-a3b3-e2d0ab811c94",
        name: "Maya Yuliana",
        profile_url: "https://example.com/user5",
        last_time_online: "2025-01-07T17:30:00Z",
        owned_farms: [],
        operated_farms: ["Peternakan Ujang"]
    }
];
