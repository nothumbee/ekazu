import { removeProp, renameProp } from './helpers';

const validateOutcomingData = (data, method) => {
  const isDuplicated = method === 'duplicate';
  const isAdded = method === 'add';
  // const isEdited = method === 'edit';

  const {
    uid: id,
    title,
    diagnosis,
    minBonus,
    maxMalus,
    maxPrice,
    exams: oldExams = [],
    ranges: oldRanges = [],
    symptoms: oldSymptoms = []
  } = data;

  const renameExam = ['isExam', 'exam'];

  const exams = oldExams.map(generator =>
    renameProp(
      ...renameExam,
      removeProp('keys', (isDuplicated || isAdded) ? removeProp('id', generator) : generator)
    )
  );

  // ranges doesnt have keys
  const ranges = oldRanges.map(generator =>
    renameProp(
      'isExam',
      'exam',
      (isDuplicated || isAdded) ? removeProp('id', generator) : generator
    )
  );

  const symptoms = oldSymptoms.map(generator =>
    renameProp(
      'isExam',
      'exam',
      removeProp('keys', (isDuplicated || isAdded) ? removeProp('id', generator) : generator)
    )
  );

  return {
    ...(!(isDuplicated || isAdded) && { id }),
    title,
    diagnosis,
    minBonus,
    maxMalus,
    maxPrice,
    generators: [...ranges, ...symptoms, ...exams]
  };
};

export default validateOutcomingData;
