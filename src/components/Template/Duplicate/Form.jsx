import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import TemplateBaseForm from '../Base/Form';
import axe from '../../Axios';
import validateIncomingData from '../Validate/Incoming';
import validateOutcomingData from '../Validate/Outcoming';

const TemplateDuplicateForm = ({ location }) => {
  const [data, setData] = useState(null);
  const id = location.search.split('?id=').pop();

  const handleLoadData = () => {
    console.log(!data);
    if (!data)
      axe.get(`/admin/template/${id}`).then(response => {
        const newData = validateIncomingData(response.data, 'duplicate');
        setData(newData);
      });
  };

  useEffect(handleLoadData, []);

  const handleSubmit = data => {
    const validData = validateOutcomingData(data, 'duplicate');
    console.log('VALIDATED DATA TO SEND DUPLICATE :', validData);
    axe.post('admin/template/', JSON.stringify(validData));
  };

  // load data and send it to base form of add template form
  return data && <TemplateBaseForm data={data} handleSubmit={handleSubmit} />;
};

export default withRouter(TemplateDuplicateForm);
