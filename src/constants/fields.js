export const OPTIONAL_FIELDS = [
  {
    name: 'exams',
    title: 'Vyšetření',
    type: 'exams'
  },
  {
    name: 'ranges',
    title: 'Rozmezí',
    type: 'ranges'
  },
  { name: 'symptoms', title: 'Text', type: 'text' }
];

export const REQUIRED_FIELDS = [

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
