import { defineField, defineType } from 'sanity'

export const facilitySchema = defineType({
  name: 'facility',
  title: 'Facility',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Facility Name',
      description: 'The public-facing name shown on the website.',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'Auto-generated from the name — don\'t change this unless you know what you\'re doing.',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Tell visitors about this facility.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }, { title: 'Heading', value: 'h3' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
          lists: [{ title: 'Bullet', value: 'bullet' }],
        },
      ],
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      description: 'Upload one or more photos of this facility.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'bookingInfo',
      title: 'Booking / Rental Information',
      description: 'Details about how to book or rent this facility.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
          lists: [{ title: 'Bullet', value: 'bullet' }],
        },
      ],
    }),
    defineField({
      name: 'isComingSoon',
      title: 'Mark as "Coming Soon"?',
      description: 'Turn on to show a "Coming Soon" badge on this facility.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', comingSoon: 'isComingSoon', media: 'photos.0' },
    prepare({ title, comingSoon, media }) {
      return { title, subtitle: comingSoon ? '🚧 Coming Soon' : 'Active', media }
    },
  },
})
