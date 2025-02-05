export type TestimonialsModel = {
    id: string;
    name: string;
    designation?: string;
    companyName?: string;
    companyLocation?: string;
    testimonials: string;
    isActive: boolean | string;
    logo?: string;
    imagePath?: string;
    youTubeUrl?: string;
    order: number;
    serviceId: string;
    createdAt?:string;
    updatedAt?:string;
    deletedAt?:string;
  };
  
  export type AddTestimonialsModel = Omit<
    TestimonialsModel,
    "id" | "updatedAt" | "deletedAt" | "createdAt"
  >;
  
  export type UpdateTestimonialsModel = Omit<TestimonialsModel, 'updatedAt' | 'deletedAt' | 'createdAt'>