import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type should ever exist
  fields: [
    defineField({
      name: 'orgName',
      title: 'Organization Name',
      description: 'Full name shown in the footer and browser tab.',
      type: 'string',
      initialValue: 'Canning & District Recreational Commission',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short phrase shown on the homepage hero.',
      type: 'string',
      initialValue: 'Your community. Your recreation.',
    }),
    defineField({
      name: 'address',
      title: 'Mailing Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page URL',
      description: 'Full URL to the Facebook page, e.g. https://facebook.com/canningrecreation',
      type: 'url',
    }),
    defineField({
      name: 'foundingYear',
      title: 'Founded Year',
      description: 'Year the recreation commission was established.',
      type: 'number',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Upload the organization logo.',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'orgName' },
  },
})
