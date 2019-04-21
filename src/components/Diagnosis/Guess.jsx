import React, { useState, useEffect } from 'react';
import axe from '../Axios';
import Title from 'antd/lib/typography/Title';

const DiagnosisGuessForm = ({ id }) => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
  const [diagnosisList, setDiagnosisList] = useState([]);

  const handleLoadDiagnosisList = () => {
    if (!diagnosisList.length)
      axe
        .get('student/diagnosis')
        .then(response => {
          setDiagnosisList(response.data);
        })
        .catch(err => console.log(err));
  };
  useEffect(handleLoadDiagnosisList);

  const handleSuccessFinishedCase = () => {};

  const handleFinishCase = event => {
    event.preventDefault();
    console.log('Diagno :', id, selectedDiagnosis);
    axe
      .post(
        `student/${id}`,
        JSON.stringify({
          diagnosis: selectedDiagnosis
          // exams: this.state.exams
        })
      )
      .then(response => {
        // handle success
        handleSuccessFinishedCase();
        console.log('JE TO NA...', response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Title level={4}>Guess the Diagnosis</Title>
      <form onSubmit={event => handleFinishCase(event)}>
        <select
          name="diagnosis"
          value={selectedDiagnosis}
          onChange={({ target }) => setSelectedDiagnosis(target.value)}
        >
          {diagnosisList.map((diagnosis, index) => (
            <option key={index} value={diagnosis}>
              {diagnosis}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit diagnosis" />
      </form>
    </>
  );
};

export default DiagnosisGuessForm;
