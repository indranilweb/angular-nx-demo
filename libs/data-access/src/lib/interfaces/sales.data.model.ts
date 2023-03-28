export interface Sales {
    title: string;
    xAxisLabel: string;
    yAxisLabel: string;
    orientation: string;
    height: string;
    data: SalesData[];
}

export interface SalesData {
    name: string;
    value: number;
}