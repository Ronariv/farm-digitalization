export interface Livestock {
    id: string;
    name_id: string;
    gender: 'MALE' | 'FEMALE';
    dob: string;
    weight?: string;
    phase?: 'SIAPKAWIN' | 'CEMPE' | "DARA" | "HAMIL";
    photo_url?: string;
    grade?: string;
    breed: string;
    type_id: string;
    farm_id: string;
}