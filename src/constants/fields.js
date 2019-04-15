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
  { name: 'symptom', title: 'Text', type: 'text' }
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
