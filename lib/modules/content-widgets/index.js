// module.exports = {
//   extend: 'apostrophe-widgets',
//   label: 'Content',
//   contextualOnly: true,
//   addFields: [
//     {
//       name: 'areaLeft',
//       type: 'area',
//       label: 'Left Area',
//     },
//     {
//       name: 'areaRight',
//       type: 'area',
//       label: 'Right Area',
//     }
//   ]
// };
module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Content',
  addFields: [
    {
      name: 'text',
      type: 'singleton',
      label: 'Text',
      // class: 'contentText',
      widgetType: 'apostrophe-rich-text'
    },
    {
      name: 'picture',
      type: 'singleton',
      label: 'Bild',
      // class: 'contentPic',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'auswahl',
      label: 'Aufteilung',
      type: 'select',
      choices: [
        {
          label: 'Bild links und Text rechts',
          value: 'picLeft'
        },
        {
          label: 'Bild rechts und Text links',
          value: 'picRight'
        }
      ]
    }
  ]
};
