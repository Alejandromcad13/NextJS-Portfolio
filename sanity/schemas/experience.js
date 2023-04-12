import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'company',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options:{hotspot:true}
    }),
    defineField({
      name: 'dateStarted',
      title: 'date Started',
      type: 'string'
    }),
    defineField({
        name: 'dateEnded',
        title: 'dateEnded',
        type: 'string'
      }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'is currently working here',
      type: 'boolean'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:'reference', to: {type:'skill'}}]
    }),
    defineField({
        name: 'points',
        title: 'Points',
        type: 'array',
        of:[{type:'string'}]
      }),
  ]
})
