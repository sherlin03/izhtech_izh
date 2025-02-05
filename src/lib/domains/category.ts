import { PostModel } from "./post";

export type CategoryModel ={
    id:string;   
    name :string;
    description :string;
    icon:string;
    shortDescription:string;
    imagePath:string;
    blog : PostModel[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};

export type AddCategoryModel= Omit<PostModel, 'id' | 'updatedAt' | 'deletedAt' | 'createdAt'>