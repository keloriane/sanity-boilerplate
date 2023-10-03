import Author from "../../sanity/schemas/author";



type Base = {
    _createdAt:string;
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:string;

}

interface Post extends Base {
    author: Author;
    title:string;
    slug:string;
    body:Block[];

}

interface Block {
    _key:string;
    _type:string;
    children:Children[];
    markDefs:any[];
    style:"normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}