export class food{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    star!:number;
    tags?:string[];
    imageUrl!:string;
    cooktime!:string;
    origins!:string[];
}