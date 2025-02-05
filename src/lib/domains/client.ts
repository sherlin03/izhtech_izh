export type ClientModel = {
    id: string;
    name: string;
    companyName: string;
    industry: string;
    description: string;
    isActive: boolean | string;
    logo?: string;
    serviceId: string;
    createdAt?:string;
    updatedAt?:string;
    deletedAt?:string;
  };
  
  export type AddClientModel = Omit<
    ClientModel,
    "id" | "updatedAt" | "deletedAt" | "createdAt"
  >;
  
  export type UpdateClientModel = Omit<ClientModel, 'updatedAt' | 'deletedAt' | 'createdAt'>