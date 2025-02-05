
export type ServicesHighlightsModal ={

    id: string;   
    name:string;
    description: string;    
    imagePath?: string ;   
    icon?:string;      
    order:number;     
    isActive:boolean;   
    serviceId:string;   
    createdAt?:string; 
    updatedAt?:string;
    deletedAt?:string; 
    }
    
    export type AddHighlightsModel= Omit<ServicesHighlightsModal, 'id' | 'updatedAt' | 'deletedAt' | 'createdAt' >
    export type UpdateHighlightsModel= Omit<ServicesHighlightsModal, 'updatedAt' | 'deletedAt' | 'createdAt' >