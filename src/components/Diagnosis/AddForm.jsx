import React, { useState } from 'react';
import axe from '../Axios';

const DiagnosisAddForm = props => {
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const objToSend = { definition: diagnosis };
    console.log('objToSend', objToSend);
    axe
      .post('/admin/codelist/diagnosis', JSON.stringify(objToSend))
      .then(response => console.log('response', response))
      .catch(err => console.log('err', err));
  };

  return (
    <>
      <h2>Add Diagnosis Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="diagnosis"
          value={diagnosis}
          onChange={({ target }) => setDiagnosis(target.value)}
        />
        <input type="submit" value="Add Diagnosis" />
      </form>
    </>
  );
};

export default DiagnosisAddForm;
