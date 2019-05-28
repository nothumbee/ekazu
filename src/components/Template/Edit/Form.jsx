import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import TemplateBaseForm from '../Base/Form';
import axe from '../../Axios';
import validateIncomingData from '../Validate/Incoming';
import validateOutcomingData from '../Validate/Outcoming';

const TemplateEditForm = ({ location }) => {
  const [data, setData] = useState(null);
  const id = location.search.split("?id=").pop();

  const handleLoadData = () => {
    if (!data)
      axe.get(`/admin/template/${id}`).then(response => {
        console.log('response.data :', response.data);
        const newData = validateIncomingData(response.data);
        setData(newData);

        console.log(
          'VALIDATED EDIT DATA :',
          validateIncomingData(response.data)
        );
      });
  };

  useEffect(handleLoadData, []);

  const handleSubmit = data => {
    const newData = validateOutcomingData(data);
    console.log('DATA TO SEND EDITED :', newData);
    axe.put(`admin/template/${id}`, JSON.stringify(newData));
  };

  // load data and send it to base form of add template form
  return data && <TemplateBaseForm data={data} handleSubmit={handleSubmit} />;
};

export default withRouter(TemplateEditForm);
