import { Skill } from "@/typings";

export const fetchSkills = async () => {
    //use the async fetch function to get the contents of an endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    //we conver the response to readable json format
    const data = await response.json()
    //we type check the response to make sure the values have the right data types
    const skills:Skill[] = data.skills;

    return skills;
}