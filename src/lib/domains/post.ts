import { CategoryModel } from "./category";


export type PostModel ={
    id:string;   
    title :string;
    description :string;
    status:string;
    tags:string;
    shortNote:string;
    imagePath:string;
    featuredImagePath:string;
    publishedDate: Date;
    author:{name:string, id:string};
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;    
    categories:CategoryModel[]; 
};

export type AddPostModel= Omit<PostModel, 'id' | 'updatedAt' | 'deletedAt' | 'createdAt' | 'publishedDate'>
export type UpdatePostModel= Omit<PostModel, 'updatedAt' | 'deletedAt' | 'createdAt' | 'publishedDate'>

