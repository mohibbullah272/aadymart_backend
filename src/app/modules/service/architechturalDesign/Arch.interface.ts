export interface IArch {
    title:string,
    description:string,
    image:string,
    features: string[];
    minPrice: number;
    maxPrice: number;
}
export interface IArchUpdate {
    title?:string,
    description?:string,
    image?:string,
    features?: string[];
    minPrice?: number;
    maxPrice?: number;
}