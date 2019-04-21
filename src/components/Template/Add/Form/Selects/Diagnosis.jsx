import React, { useEffect, useState } from 'react';
import axe from '../../../../Axios';
import withEither from '../../../../HOC/withEither';
import { LoadingSpin } from '../../../../Loading';

const SelectDiagnosis = () => {
  const [loading, setLoading] = useState(true);
  const [diagnosisList, setDiagnosisList] = useState([]);
  const [selectedDiagnosisID, setSelectedDiagnosisID] = useState('');

  const handleLoadDiagnosis = () => {
    if (!diagnosisList.length)
      axe
        .get('admin/codelist/diagnosis')
        .then(result => {
          setDiagnosisList(result.data);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        })
        .catch(err => console.log(err));
  };

  useEffect(handleLoadDiagnosis);

  const Select = () => (
    <select
      name="diagnosis"
      value={selectedDiagnosisID}
      onChange={event => setSelectedDiagnosisID(event.target.value)}
    >
      {diagnosisList.map((diagnosis, index) => (
        <option key={index} value={diagnosis.id}>
          {diagnosis.definition}
        </option>
      ))}
    </select>
  );

  const isLoadingConditionFn = props => props.loading;

  const SelectWithLoading = withEither(isLoadingConditionFn, LoadingSpin)(
    Select
  );

  return <SelectWithLoading loading={loading} />;
};

export default SelectDiagnosis;
