interface SanityBody{
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt: string
}

interface Image{
    type:'image';
    asset:{
        _ref:string;
        _type:'reference';
    }
}

export interface Social extends SanityBody{
    _type:"social";
    title:string;
    url:string;
}

export interface Skill extends SanityBody{
    _type:"skill";
    title:string;
    progress:number;
    image:Image;
}

export interface PageInfo extends SanityBody{
    _type:'pageInfo';
    address:string;
    backgroundInformation:string;
    email:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
    role:string;
    socials:Social[]
}

export interface Project extends SanityBody{
    _type:'project';
    title:string;
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Skill[]
    
}

export interface Experiences extends SanityBody{
    _type:'experience';
    company:string;
    companyImage:Image;
    email:string;
    dateStarted:string;
    dateEnded:string;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Skill[]
}

