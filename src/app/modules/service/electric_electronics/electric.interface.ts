export interface IElectric {
    title:string,
    description:string,
    image:string,
    features: string[];
    minPrice: number;
    maxPrice: number;
}
export interface IElectricUpdate {
    title?:string,
    description?:string,
    image?:string,
    features?: string[];
    minPrice?: number;
    maxPrice?: number;
}