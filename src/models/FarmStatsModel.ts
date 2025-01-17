export interface StatisticsModel {
    total: number;
    totalMale: number;
    totalFemale: number;
    malePhaseStats: Record<string, any>;
    femalePhaseStats: Record<string, any>;
    livestockConditionStats: Record<string, number>;
}
