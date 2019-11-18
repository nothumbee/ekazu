import {
  addKeys,
  renameAllProps,
  filterNullValues,
  removeAllProps,
} from './helpers';

const getGeneratorType = (generator) => {
  if (generator.text) return 'text';
  if (generator.min && generator.max) return 'range';
  if (generator.imageGroup) return 'images';
  return false;
};

const validateIncomingData = (data, method) => {
  const isDuplicate = method === 'duplicate';

  // add groupsKeys and generatorsKeys
  const newData = { ...data, groupsKeys: Array.from(Array(data.groups.length).keys()) };

  newData.groups = newData.groups.map((group) => ({
    ...group,
    generatorsKeys: group.generators.map((generator, index) => ({ id: index, type: getGeneratorType(generator) })),
  }));

  const setFirst = {
    groupsKeys: Array.from(Array(data.groups.length).keys()),
    groups: data.groups.map((group) => ({
      generatorsKeys: group.generators.map((generator, index) => ({ id: index, type: getGeneratorType(generator) })),
      generators: group.generators.map((generator) => {
        if (generator.text) return ({ keys: Array.from(Array(generator.text.length).keys()) });
      }),
    })),
  };

  console.log('setFirst', setFirst);
  return { newData, setFirst };
};


// const validateIncomingData = (data, method) => {
//   console.log('data', data);
//   const isDuplicate = method === 'duplicate';
//   // --- vymazat vsechna id

//   const {
//     id: uid, title, diagnosis, minBonus, maxMalus, maxPrice,
//   } = data;

//   let { groups } = data;

//   // if is duplicate need to remove all ids from generators and also groups
//   if (isDuplicate) {
//     groups = removeAllProps('id', groups);
//     groups = groups.map((group) => removeAllProps('id', group.generators));
//   }

//   groups = groups.map((group) => renameAllProps('exam', 'isExam', group.generators));

//   // real group when not partial exam and has title
//   let realGroups = groups.filter((group) => !!group.title && group.isPartialExam);
//   realGroups = realGroups.map((group) => group.generators.map((generator) => addKeys(generator)));

//   // need to add keys to everything
//   let partials = groups.filter((group) => group.isPartialExam);
//   partials = partials.map((group) => ({
//     ...group,
//     keys: Array.from(Array(group.generators.length).keys()).map((item) => ({ ...item, type: 'ranges' })),
//   }));

//   // rename exam to isExam in generators
//   const singleGenerators = groups.filter((group) => group.generators.length > 1);

//   const exams = singleGenerators
//     .filter((generator) => !generator.imageGroup === null)
//     .map((generator) => addKeys(filterNullValues(generator)));

//   const ranges = singleGenerators
//     .filter((generator) => !generator.min === null && !generator.max === null)
//     .map((generator) => filterNullValues(generator));

//   const symptoms = singleGenerators
//     .filter(
//       (generator) => generator.min === null
//         && generator.max === null
//         && generator.imageGroup === null,
//     )
//     .map((generator) => addKeys(filterNullValues(generator)));

//   // const count = [
//   //   ...exams.map((exam, index) => ({ id: index, type: 'exams' })),
//   //   ...ranges.map((ranges, index) => ({ id: index, type: 'ranges' })),
//   //   ...symptoms.map((symptoms, index) => ({
//   //     id: index,
//   //     type: 'symptoms'
//   //   }))
//   // ];

//   const onlyFirstData = (arr) => arr.map(({ isExam, keys }) => ({ isExam, keys }));

//   const onlyAfterData = (arr) => arr.map(({ isExam, keys, ...rest }) => ({ ...rest }));

//   return {
//     first: {
//       ...(!isDuplicate && { uid }),
//       title,
//       diagnosis,
//       minBonus,
//       maxMalus,
//       maxPrice,
//       ...(exams.length && { exams: onlyFirstData(exams) }),
//       ...(ranges.length && { ranges: onlyFirstData(ranges) }),
//       ...(symptoms.length && { symptoms: onlyFirstData(symptoms) }),
//     },
//     after: {
//       ...(exams.length && { exams: onlyAfterData(exams) }),
//       ...(ranges.length && { ranges: onlyAfterData(ranges) }),
//       ...(symptoms.length && { symptoms: onlyAfterData(symptoms) }),
//     },
//     // count
//   };
// };

export default validateIncomingData;
