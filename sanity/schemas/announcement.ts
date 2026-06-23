import { defineField, defineType } from 'sanity'

export const announcementSchema = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Announcement Text',
      description: 'Short message shown in the banner at the top of every page. Keep it under 120 characters.',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'colour',
      title: 'Banner Colour',
      description: 'Yellow = general notice. Red = urgent (e.g. cancellations).',
      type: 'string',
      options: {
        list: [
          { title: 'Yellow (general)', value: 'yellow' },
          { title: 'Red (urgent)', value: 'red' },
        ],
        layout: 'radio',
      },
      initialValue: 'yellow',
    }),
    defineField({
      name: 'isActive',
      title: 'Show on website?',
      description: 'Toggle off to hide this announcement without deleting it.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'text', active: 'isActive', colour: 'colour' },
    prepare({ title, active, colour }) {
      return {
        title,
        subtitle: `${colour === 'red' ? '🔴 Urgent' : '🟡 General'} — ${active ? 'Live' : 'Hidden'}`,
      }
    },
  },
})
