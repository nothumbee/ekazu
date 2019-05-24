import React, { useState, useEffect } from 'react';
import axe from '../Axios';
import Title from 'antd/lib/typography/Title';
// import { Modal, Button } from 'antd';

import { LoadingSpin } from '../Loading';
import withEither from '../HOC/withEither';

const DiagnosisGuessForm = ({ studentID, exams }) => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
  const [diagnosisList, setDiagnosisList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);

  const handleLoadDiagnosisList = () => {
    if (!diagnosisList.length)
      axe
        .get('student/diagnosis')
        .then(response => {
          setDiagnosisList(response.data);
          setLoading(false);
        })
        .catch(err => console.log(err));
  };

  useEffect(handleLoadDiagnosisList, []);

  const handleSuccessFinishedCase = ({ wasRight }) => {
    if (wasRight) {
      console.log('JE TO NA...', wasRight);
    } else console.log('Spatne kamo :');
  };

  const handleFinishCase = event => {
    setChecking(true);
    event.preventDefault();

    if (selectedDiagnosis) {
      const caseToFinish = {
        diagnosis: selectedDiagnosis,
        exams
      };

      axe
        .post(`student/${studentID}`, JSON.stringify(caseToFinish))
        .then(response => {
          // handle success
          setTimeout(() => {
            setChecking(false);
          }, 1500);

          handleSuccessFinishedCase(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const BaseSelect = () => (
    <select
      name="diagnosis"
      value={selectedDiagnosis}
      onChange={({ target }) => {
        console.log('target.value', target.value);
        setSelectedDiagnosis(target.value);
      }}
    >
      <option value="">----</option>
      {diagnosisList.map((diagnosis, index) => (
        <option key={index} value={diagnosis}>
          {diagnosis}
        </option>
      ))}
    </select>
  );

  const isLoadingConditionFn = props => props.loading;

  const SelectWithLoading = withEither(isLoadingConditionFn, LoadingSpin)(
    BaseSelect
  );

  const DiagnosisGuessFormBase = () => (
    <>
      <Title level={4}>Vyber o jakou diagnózu se jedná:</Title>
      <form onSubmit={event => handleFinishCase(event)}>
        <SelectWithLoading loading={loading} />
        <input
          className={'ant-btn ant-btn-primary'}
          type="submit"
          disabled={!selectedDiagnosis}
          value="Ověřit diagnózu"
          // disabled={loading}
        />
      </form>
    </>
  );

  const isCheckingConditionFn = props => props.checking;

  const DiagnosisGuessFormWithChecking = withEither(
    isCheckingConditionFn,
    LoadingSpin
  )(DiagnosisGuessFormBase);

  // return <SelectWithLoading loading={loading} />;

  return <DiagnosisGuessFormWithChecking checking={checking} />;
};

export default DiagnosisGuessForm;
