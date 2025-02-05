
export type ServicesFeaturesModal ={

id: string;   
title:string;
description: string;    
imagePath?: string ;   
icon?:string;    
isFeatured:boolean;   
order:number;     
isActive:boolean;   
serviceId:string;   
createdAt?:string; 
updatedAt?:string;
deletedAt?:string; 
}
export type UpdateFeatureseModel= Omit<ServicesFeaturesModal, 'updatedAt' | 'deletedAt' | 'createdAt' >