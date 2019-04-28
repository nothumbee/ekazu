import React from 'react';
import { withRouter } from 'react-router';
import TemplateAddFormBase from '../Add/Form/Base/Form';

const TemplateEditForm = ({ location }) => {
  const id = location.search.split('?id=').pop();
  const data = { id };
  // load data and send it to base form of add template form
  return (
    <div>
      <TemplateAddFormBase data={data} />
    </div>
  );
};

export default withRouter(TemplateEditForm);
