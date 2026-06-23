import { defineField, defineType } from 'sanity'

export const eventSchema = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Name',
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
      name: 'date',
      title: 'Event Date',
      description: 'Pick the date this event takes place.',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Start Time',
      description: 'e.g. "7:00 PM" — leave blank if all-day.',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Where is this event happening? e.g. "Glooscap Arena"',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Event Photo',
      description: 'Upload a photo for this event. If left empty a placeholder will be shown.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Full details about this event.',
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
      name: 'registrationUrl',
      title: 'Registration Link (optional)',
      description: 'Paste the full URL if people can register online.',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on homepage?',
      description: 'Turn on to show this event in the homepage upcoming events strip.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'photo' },
    prepare({ title, date, media }) {
      return { title, subtitle: date, media }
    },
  },
})
