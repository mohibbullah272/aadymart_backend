export interface IWeb {
    title:string,
    description:string,
    image:string,
    basePrice:number,
    technologies:string[]
}
export interface IWebUpdate {
    title?:string,
    description?:string,
    image?:string,
    basePrice?:number,
    technologies?:string[]
}