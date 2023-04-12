import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Skill } from '@/typings'

const query = groq`*[_type == "skill"]`

type Data = {
    //the Social[] is the datatype we create to format the response in the right way
    skills: Skill[]
  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    //create an object that inside has the type definition and go inside the backend by fetching the above query
    //then put that response inside the skills object 
    const skills:Skill[] = await sanityClient.fetch(query)

    res.status(200).json({skills})
  }