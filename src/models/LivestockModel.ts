import statisticsLactationData from "./statisticsLactationModel";
import statisticsMilkData from "./statisticsMilkModel";
import statisticsWeightData from "./statisticsWeightModel";
import statisticsLivestockSold from "./statisticsLivestockSold";

export interface HistoryItem {
    title: string;
    value: string;
}

export interface Health {
    current_condition: string;
    history_items: HistoryItem[];
}

export interface Medication {
    current_condition: string;
    history_items: HistoryItem[];
}

export interface Vitamin {
    current_condition: string;
    history_items: HistoryItem[];
}

export interface Vaccine {
    current_condition: string;
    history_items: HistoryItem[];
}

export interface MonthlyData {
    month: string;
    value: number;
}

export interface YearlyData {
    year: number;
    data: MonthlyData[];
}

export interface MilkData {
    yearlyData: YearlyData[];
}

export const defaultMilkData: MilkData = {
    yearlyData: statisticsMilkData,
};

export interface LivestockSold{
    yearlyData: YearlyData[];
}

export const defaultLivestockSold: LivestockSold = {
    yearlyData: statisticsLivestockSold,
}

export interface LactationData {
    yearlyData: YearlyData[];
}

export const defaultLactationData: LactationData = {
    yearlyData: statisticsLactationData,
};

export interface WeightData {
    yearlyData: YearlyData[];
}

export const defaultWeightData: WeightData = {
    yearlyData: statisticsWeightData,
};

export interface Livestock {
    id: string;
    name_id: string;
    gender: 'MALE' | 'FEMALE';
    dob: string;
    weight?: string;
    phase?: 'SIAPKAWIN' | 'CEMPE' | "DARA" | "HAMIL" | "AFKIR";
    photo_url?: string;
    grade?: string;
    breed: string;
    type_id: string;
    farm_name: string;
    dad_name_id?: string;
    mom_name_id?: string;
    grandpa_name_id?: string;
    grandma_name_id?: string;
    health: Health;
    medication: Medication;
    vitamin: Vitamin;
    vaccine: Vaccine;
    milkData: MilkData;
    lactationData: LactationData;
    weightData: WeightData;
    livestockSold: LivestockSold;
}
