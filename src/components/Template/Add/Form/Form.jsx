import React, { useState } from 'react';
import { Alert } from 'antd';
import TemplateBaseForm from '../../Base/Form/Form';
import axe from '../../../Axios';
import validateOutcomingData from '../../Validate/Outcoming';

const TemplateAddForm = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (data) => {
    const validData = validateOutcomingData(data, 'add');
    console.log('VALIDATED DATA TO SEND ADDDD :', validData);
    axe.post('/admin/template/', JSON.stringify(validData))
      .then((response) => setIsSuccess(true))
      .catch((err) => setIsError(true));
  };


  return (
    <>
      <TemplateBaseForm handleSubmit={handleSubmit} method="create" />
      {isSuccess && <Alert message="Diagnóza úspěšně přidána." type="success" />}
      {isError && <Alert message="Někde se stala chyba." type="error" />}
    </>
  );
};

export default TemplateAddForm;
