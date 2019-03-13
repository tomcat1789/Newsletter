module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Claim',
  addFields: [
    {
      name: 'autor',
      type: 'string',
      label: 'Autor',
      required: true
    },
    {
      name: 'zitat',
      type: 'string',
      label: 'Zitat',
      required: true
    },
    {
      name: 'titel',
      type: 'string',
      label: 'Überschrift',
      required: true
    },
    {
      name: 'autorPic',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      label: 'Foto des Autors',
      required: true
    },
  ]
};
