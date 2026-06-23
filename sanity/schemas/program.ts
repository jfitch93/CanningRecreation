import { defineField, defineType } from 'sanity'

export const programSchema = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Name',
      description: 'The public-facing name shown on the website.',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'Auto-generated from the title — don\'t change this unless you know what you\'re doing.',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'What type of program is this? Used for filtering on the Programs page.',
      type: 'string',
      options: {
        list: [
          { title: 'Youth', value: 'youth' },
          { title: 'Adult', value: 'adult' },
          { title: 'Drop-In', value: 'drop-in' },
          { title: 'Seasonal', value: 'seasonal' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Program Photo',
      description: 'Upload a photo for this program.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Full details about this program.',
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
      name: 'ageRange',
      title: 'Age Range',
      description: 'e.g. "Ages 6–12" or "18+"',
      type: 'string',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      description: 'e.g. "Tuesdays 6–8 PM" or "Saturdays in January"',
      type: 'string',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration Link (optional)',
      description: 'Paste the full URL if people can register online.',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Show on website?',
      description: 'Toggle off to hide this program without deleting it.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title', category: 'category', media: 'photo' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media }
    },
  },
})
