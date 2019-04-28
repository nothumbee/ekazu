import React from 'react';
import TemplateAddForm from '../Add/Form/Form';
import { withRouter } from 'react-router';

const TemplateEditForm = ({ location }) => {
  const id = location.search.split('?id=').pop();
  return (
    <div>
      <TemplateAddForm editId={id} />
    </div>
  );
};

export default withRouter(TemplateEditForm);
