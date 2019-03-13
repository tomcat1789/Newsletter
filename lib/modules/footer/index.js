module.exports = {
  extend: 'apostrophe-pieces',
  name:  'footer',
  label: 'FooterLink',
  pluralLabel: 'Footer',
  addFields: [
    {
      name: 'title',
      label: 'Bezeichnung',
      type: 'string',
      required: true
    },
    {
      name: 'link',
      label: 'Link',
      type: 'url',
      required: true
    }
  ],
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics',
      fields: [ 'title', 'link' ]
    }
  ]
};
