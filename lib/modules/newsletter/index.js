module.exports = {
  extend: 'apostrophe-pieces',
  name:  'newsletter',
  label: 'Newsletter',
  pluralLabel: 'Newsletter',
  addFields: [
    {
      name: 'title',
      label: 'Thema',
      type: 'string',
      required: true
    },
    {
      name: 'autor',
      label: 'Autor',
      type: 'string',
      required: true
    },
    {
      name: 'datum',
      label: 'Datum',
      type: 'date',
      required: true,      
    },
    {
      name: 'link',
      label: 'Link',
      type: 'url',
      required: true
    },
    // {
    //   name: 'url',
    //   label: 'URL',
    //   type: 'url',
    //   required: true
    // },
  ],
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics',
      fields: [ 'title', 'autor', 'datum', 'link']
    }
  ]
};
