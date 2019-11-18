import { removeProp, renameProp, removeAllProps } from './helpers';

// remove groupsKeys and remove generatorsKeys everywhere
// add order to each group and generator
// and remove keys in each generator
const validateOutcomingData = (data, method) => {
  const isDuplicated = method === 'duplicate';
  const isAdded = method === 'add';

  console.log('data', data);
  const newData = removeProp('groupsKeys', data);
  newData.groups = removeAllProps('generatorsKeys', newData.groups);

  if (isDuplicated) {
    newData.groups = removeAllProps('id', newData.groups);
    // newData.groups = newData.groups.map() removeAllProps('id', newData.groups);
  }

  // This strips group data, we need to keep them
  newData.groups = newData.groups.map((group) => ({
    ...group,
    generators: group.generators.map((generator) => removeProp('id', removeProp('keys', generator))),
  }));
};

export default validateOutcomingData;
// const validateOutcomingData = (data, method) => {
//   const isDuplicated = method === 'duplicate';
//   const isAdded = method === 'add';
//   // const isEdited = method === 'edit';

//   const {
//     uid: id,
//     title,
//     diagnosis,
//     minBonus,
//     maxMalus,
//     maxPrice,
//     exams: oldExams = [],
//     ranges: oldRanges = [],
//     symptoms: oldSymptoms = [],
//     groups: oldGroups = [],
//     partials = [],
//   } = data;

//   const renameExam = ['isExam', 'exam'];

//   const exams = oldExams.map((generator) => renameProp(
//     ...renameExam,
//     removeProp('keys', (isDuplicated || isAdded) ? removeProp('id', generator) : generator),
//   ));

//   // ranges doesnt have keys
//   const ranges = oldRanges.map((generator) => renameProp(
//     'isExam',
//     'exam',
//     (isDuplicated || isAdded) ? removeProp('id', generator) : generator,
//   ));

//   const symptoms = oldSymptoms.map((generator) => renameProp(
//     'isExam',
//     'exam',
//     removeProp('keys', (isDuplicated || isAdded) ? removeProp('id', generator) : generator),
//   ));

//   const newPartials = partials.map((partial) => renameProp('ranges', 'generators', removeProp('keys', removeProp('id', partial))));

//   const newGroups = oldGroups.map((group) => {
//     const noKeys = removeProp('keys', group);
//     const noExams = removeProp('exams', noKeys);
//     const noRanges = removeProp('ranges', noExams);
//     const noSymptoms = removeProp('symptoms', noRanges);
//     const generators = [...group.symptoms, ...group.ranges, ...group.exams].map((generator, index) => ({ ...removeProp('id', generator), order: index }));
//     const newGroup = { ...noSymptoms, generators };
//     return newGroup;
//   });

//   const groups = [...ranges, ...symptoms, ...exams, ...newGroups, ...newPartials]
//     .map((obj, index) => ({ ...obj, order: index }));

//   return {
//     ...(!(isDuplicated || isAdded) && { id }),
//     title,
//     diagnosis,
//     minBonus,
//     maxMalus,
//     maxPrice,
//     groups,
//   };
// };

// export default validateOutcomingData;
