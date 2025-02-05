import { ServicesFeaturesModal } from "./serviceFeatures";
import { ServicesHighlightsModal } from "./serviceHighlights";
export type ServicesModal ={
    id: string,
    title?:string,
    shortNote?:string;
    description?:string;
    icon?:string;
    order?:number;
    isActive?:boolean;
    featuredImagePath?:string;
    createdAt?:string;
    updatedAt?:string;
    deletedAt?:string;
    serviceFeatures  : ServicesFeaturesModal[];
    serviceHighlights : ServicesHighlightsModal[];

}   
export type AddServiceModel= Omit<ServicesModal, 'id' | 'updatedAt' | 'deletedAt' | 'createdAt' >