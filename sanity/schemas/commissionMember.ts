import { defineField, defineType } from 'sanity'

export const commissionMemberSchema = defineType({
  name: 'commissionMember',
  title: 'Commission Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      description: 'e.g. "Chair", "Secretary", "Member at Large"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo (optional)',
      description: 'A headshot or photo of this member.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower numbers appear first. Chair is usually 1.',
      type: 'number',
      initialValue: 10,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
})
