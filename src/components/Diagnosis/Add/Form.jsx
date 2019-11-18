import React, { useState } from 'react';
import { Typography, Card, Alert } from 'antd';
import axe from '../../Axios';


const { Title } = Typography;

const DiagnosisAddForm = () => {
  const [diagnosis, setDiagnosis] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    const objToSend = { definition: diagnosis };
    axe
      .post('/admin/codelist/diagnosis', JSON.stringify(objToSend))
      .then((response) => setIsSuccess(true))
      .catch((err) => setIsError(true));
  };

  return (
    <>
      <Title level={2}>Přidání diagnózy</Title>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="diagnosis"
            placeholder="Název diagnózy"
            value={diagnosis}
            onChange={({ target }) => setDiagnosis(target.value)}
            required
          />
          <input type="submit" value="Přidat diagnózu" />
        </form>
        {isSuccess && <Alert message="Diagnóza úspěšně přidána." type="success" />}
        {isError && <Alert message="Někde se stala chyba." type="error" />}
      </Card>
    </>
  );
};

export default DiagnosisAddForm;
