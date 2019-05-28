import {
  addKeys,
  renameAllProps,
  filterNullValues,
  removeAllProps
} from './helpers';

const validateIncomingData = (data, method) => {
  const isDuplicate = method === 'duplicate';
  //--- vymazat vsechna id

  const {
    id: uid,
    title,
    diagnosis,
    minBonus,
    maxMalus,
    maxPrice,
    generators
  } = data;

  const newGens = renameAllProps(
    'exam',
    'isExam',
    isDuplicate ? removeAllProps('id', generators) : generators
  );

  const exams = newGens
    .filter(generator => !generator.imageGroup === null)
    .map(generator => addKeys(filterNullValues(generator)));

  const ranges = newGens
    .filter(generator => !generator.min === null && !generator.max === null)
    .map(generator => filterNullValues(generator));

  const symptoms = newGens
    .filter(
      generator =>
        generator.min === null &&
        generator.max === null &&
        generator.imageGroup === null
    )
    .map(generator => addKeys(filterNullValues(generator)));

  const count = [
    ...exams.map((exam, index) => ({ id: index, type: 'exams' })),
    ...ranges.map((ranges, index) => ({ id: index, type: 'ranges' })),
    ...symptoms.map((symptoms, index) => ({
      id: index,
      type: 'symptoms'
    }))
  ];

  const onlyFirstData = arr =>
    arr.map(({ isExam, keys }) => ({ isExam, keys }));
  
  const onlyAfterData = arr =>
    arr.map(({ isExam, keys, ...rest }) => ({ ...rest }));
 
  return {
    first: {
      ...(!isDuplicate && { uid }),
      title,
      diagnosis,
      minBonus,
      maxMalus,
      maxPrice,
      ...(exams.length && { exams: onlyFirstData(exams) }),
      ...(ranges.length && { ranges: onlyFirstData(ranges) }),
      ...(symptoms.length && { symptoms: onlyFirstData(symptoms) })
    },
    after: {
      ...(exams.length && { exams: onlyAfterData(exams) }),
      ...(ranges.length && { ranges: onlyAfterData(ranges) }),
      ...(symptoms.length && { symptoms: onlyAfterData(symptoms) })
    },
    count
  };
};

export default validateIncomingData;
