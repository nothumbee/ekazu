import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import TemplateBaseForm from '../Base/Form';
import axe from '../../Axios';

const TemplateEditForm = ({ location }) => {
  const [data, setData] = useState(null);
  const id = location.search.split('?id=').pop();

  const handleLoadData = () => {
    console.log(!data);
    if (!data)
      axe.get(`/admin/template/${id}`).then(response => {
        const {
          generators,
          diagnosis,
          minBonus,
          maxMalus,
          maxPrice
        } = response.data;

        const newData = {
          diagnosis,
          requiredFieldsData: {
            minBonus,
            maxMalus,
            maxPrice
          },
          generators
        };

        setData(newData);

        console.log('newData :', newData);
      });
  };

  useEffect(handleLoadData, []);

  // load data and send it to base form of add template form
  return <div>{data && <TemplateBaseForm data={data} />}</div>;
};

export default withRouter(TemplateEditForm);
