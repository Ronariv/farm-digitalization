export interface FilterCategory {
    title: string;
    items: string[];
}

export const defaultFilterCategories: FilterCategory[] = [
    {
        title: "Ternak",
        items: [
            "Sapi",
            "Kambing",
            "Domba",
            "Ayam"
        ]
    },
    {
        title: "Fase",
        items: [
            "Cempe",
            "Dara",
            "Siap Kawin",
            "Hamil",
            "Menyusui",
        ]
    },
    {
        title: "Jenis Kelamin",
        items: [
            "Jantan",
            "Betina",
        ]
    },
    {
        title: "Kondisi",
        items: [
            "Sakit",
            "Sehat",
        ]
    },
]