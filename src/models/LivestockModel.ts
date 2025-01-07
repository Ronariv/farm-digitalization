export interface Livestock {
    id: string;
    name_id: string;
    gender: 'MALE' | 'FEMALE';
    dob: string;
    weight?: string;
    phase?: 'SIAPKAWIN' | 'OTHER_PHASES';
    photo_url?: string;
    grade?: string;
    breed_id: string;
    type_id: string;
    farm_id: string;
}