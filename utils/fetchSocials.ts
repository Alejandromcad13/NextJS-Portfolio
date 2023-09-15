import { Social } from "@/typings";

export const fetchSocials = async () => {
    //use the async fetch function to get the contents of an endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          cache:'no-cache'
        }
      })

    //we conver the response to readable json format
    const data = await response.json()
    //we type check the response to make sure the values have the right data types
    const socials:Social[] = data.socials;
    console.log("SOCIALS FETCHED SUCCESSFULLY")
    return socials;
}