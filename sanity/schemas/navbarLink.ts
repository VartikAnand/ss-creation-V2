import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navbarLink',
  title: 'Navbar Link',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
});
