import React from 'react';

export const OPTIONAL_FIELDS = [
  {
    name: 'exam',
    title: 'Vyšetření',
    type: 'exam',
    values: ['title', 'show', 'malus', 'price', 'bonus', 'items']
  },
  {
    name: 'range',
    title: 'Rozmezí',
    type: 'range',
    values: ['min', 'max']
  },
  { name: 'min', title: 'Minimum', type: 'number' },
  { name: 'max', title: 'Maximum', type: 'number' },

  { name: 'text', title: 'Text', type: 'text' },
  { name: 'show', title: 'Ukázat?', type: 'checkbox' },
  { name: 'malus', title: 'Malus', type: 'number' },
  { name: 'price', title: 'Cena', type: 'number' },
  { name: 'items', title: 'Položky', type: 'array' },
  { name: 'title', title: 'Nazev', type: 'text' },
  { name: 'filename', title: 'Nazev souboru', type: 'text' },
  {
    name: 'imageGroup',
    title: 'Skupina Obrazky',
    type: 'array',
    items: ['title', 'images']
  },
  {
    name: 'images',
    title: 'Obrazky',
    type: 'array',
    items: ['filename', 'text']
  }
];

export const REQUIRED_FIELDS = [
  {
    name: 'diagnosis',
    title: 'Diagnoza',
    type: 'text'
  },
  {
    name: 'minBonus',
    title: 'minBonus',
    type: 'number'
  },
  {
    name: 'maxMalus',
    title: 'maxMalus',
    type: 'number'
  },
  {
    name: 'maxPrice',
    title: 'maxPrice',
    type: 'number'
  }
];

// ATOMS


// const AddImagesForm = () => {};
// const AddExamForm = () => {};
// const AddRangeForm = () => {};

// const BaseForm = props => {
//   return (
//     <form>
//       <input type="submit" />
//     </form>
//   );
// };
